#!/usr/bin/env bash

MYDIR=$(cd "$(dirname "$0")"; pwd)
pushd "$MYDIR/../"

yarn
yarn gatsby telemetry --disable
yarn gatsby build
cd public
# git clone, set upstream
git add . && git commit --amend --no-edit && git push origin HEAD:dist --force

ssh root@47.88.58.156 "tmux new-window /as/www/ezessay-front-update.sh"

popd

