#!/bin/bash
set -euo pipefail

pnpm store prune
rm -rf node_modules/
# Keep pnpm-lock.yaml; only remove stray lockfiles from other package managers.
rm -f package-lock.json yarn.lock
