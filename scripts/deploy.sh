#!/usr/bin/env bash
set -Eeuo pipefail

: "${DEPLOY_HOST:?Set DEPLOY_HOST (e.g. deploy@example.com)}"
: "${DEPLOY_PATH:?Set DEPLOY_PATH (e.g. /var/www/husni-portfolio)}"
: "${SITE_URL:?Set SITE_URL to the canonical public URL}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"

if [[ ! "$DEPLOY_HOST" =~ ^[a-zA-Z0-9_][a-zA-Z0-9_.@-]*$ ||
      ! "$DEPLOY_PATH" =~ ^/[a-zA-Z0-9_./-]+$ ||
      ! "$DEPLOY_PORT" =~ ^[0-9]+$ ]] ||
   (( 10#$DEPLOY_PORT < 1 || 10#$DEPLOY_PORT > 65535 )); then
  echo "Invalid DEPLOY_HOST, DEPLOY_PATH, or DEPLOY_PORT." >&2
  exit 1
fi

if ! command -v rsync >/dev/null || ! command -v ssh >/dev/null; then
  echo "ssh and rsync are required locally and rsync is required on the VPS." >&2
  exit 1
fi

cd "$(dirname "${BASH_SOURCE[0]}")/.."
npm ci
npm run check
npm run build

release="$DEPLOY_PATH/releases/$(date -u +%Y%m%d%H%M%S)-$RANDOM"
ssh -p "$DEPLOY_PORT" "$DEPLOY_HOST" "mkdir -p '$release'"
rsync -az -e "ssh -p $DEPLOY_PORT" dist/ "$DEPLOY_HOST:$release/"
next="$DEPLOY_PATH/.current-$RANDOM"
ssh -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "ln -s '$release' '$next' && mv -Tf '$next' '$DEPLOY_PATH/current'"

echo "Deployed to $DEPLOY_HOST:$DEPLOY_PATH/current"
