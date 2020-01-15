#!/usr/bin/env bash

SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd)
pushd "${SCRIPT_DIR}/ezessay-front"

git fetch origin dist
git reset --hard FETCH_HEAD

popd

