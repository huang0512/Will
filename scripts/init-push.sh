#!/usr/bin/env bash

MYDIR=$(cd "$(dirname "$0")"; pwd)
pushd "$MYDIR/../"

mkdir -p public
pushd public

git init
git remote add origin git@gitlab.com:ezessay/ezessay-front.git
git fetch origin dist
git checkout --force origin/dist

popd
popd

