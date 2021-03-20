#!/usr/bin/env bash

if git diff-index --quiet HEAD --; then
  hugo --destination docs/
  git add .
  git commit -m "Update website"
  git push upstream
else
  echo "Cannot publish if there are uncommited changes".
  exit 1
fi
