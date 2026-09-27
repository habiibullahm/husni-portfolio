#!/usr/bin/env bash
set -Eeuo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-${1:-bot-vps}}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/husniattin.my.id}"
SITE_URL="${SITE_URL:-https://husniattin.my.id}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"

if [[ ! "$DEPLOY_HOST" =~ ^[a-zA-Z0-9_][a-zA-Z0-9_.@-]*$ ||
      ! "$DEPLOY_PATH" =~ ^/[a-zA-Z0-9_./-]+$ ||
      ! "$DEPLOY_PORT" =~ ^[0-9]+$ ]] ||
   (( 10#$DEPLOY_PORT < 1 || 10#$DEPLOY_PORT > 65535 )); then
  echo "Invalid DEPLOY_HOST, DEPLOY_PATH, or DEPLOY_PORT." >&2
  exit 1
fi

if ! command -v tar >/dev/null || ! command -v ssh >/dev/null; then
  echo "tar and ssh are required locally; tar is required on the VPS." >&2
  exit 1
fi

cd "$(dirname "${BASH_SOURCE[0]}")/.."
if [[ "${INSTALL_DEPS:-0}" == "1" || ! -x node_modules/.bin/astro ]]; then
  npm ci
elif [[ package.json -nt node_modules/.package-lock.json || package-lock.json -nt node_modules/.package-lock.json ]]; then
  echo "Dependencies changed. Stop the local dev server and rerun with INSTALL_DEPS=1." >&2
  exit 1
fi

npm run check
npm run build

release="$DEPLOY_PATH/releases/$(date -u +%Y%m%d%H%M%S)-$RANDOM"
current_link="$DEPLOY_PATH/.current-$RANDOM"
ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "if [[ -e '$DEPLOY_PATH/current' && ! -L '$DEPLOY_PATH/current' ]]; then echo 'Refusing to replace non-symlink current path.' >&2; exit 1; fi; sudo install -d -o \$(id -un) -g \$(id -gn) '$DEPLOY_PATH/releases'"
tar -C dist -czf - . | ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "mkdir -p '$release' && tar -xzf - -C '$release'"
ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "test -s '$release/index.html' && sudo ln -s '$release' '$current_link' && sudo mv -Tf '$current_link' '$DEPLOY_PATH/current'"

echo "Deployed to $DEPLOY_HOST:$DEPLOY_PATH/current"
