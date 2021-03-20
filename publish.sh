#!/usr/bin/env bash

hugo --destination docs/
git add .
git commit -m "Update website"
git push upstream
