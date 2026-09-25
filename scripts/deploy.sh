#!/usr/bin/env bash
set -Eeuo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-${1:-bot-vps}}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/husniattin.my.id}"
SITE_URL="${SITE_URL:-https://www.husniattin.my.id}"
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
npm ci
npm run check
npm run build

release="$DEPLOY_PATH/releases/$(date -u +%Y%m%d%H%M%S)-$RANDOM"
ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "sudo install -d -o \$(id -un) -g \$(id -gn) '$DEPLOY_PATH/releases'"
tar -C dist -czf - . | ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "mkdir -p '$release' && tar -xzf - -C '$release'"
ssh -o BatchMode=yes -p "$DEPLOY_PORT" "$DEPLOY_HOST" \
  "sudo ln -sfn '$release' '$DEPLOY_PATH/current'"

echo "Deployed to $DEPLOY_HOST:$DEPLOY_PATH/current"
