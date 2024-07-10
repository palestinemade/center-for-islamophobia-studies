#!/bin/bash

# Install npm-check-updates and depcheck if not installed
npm install -g npm-check-updates depcheck

# Check for unused and missing dependencies
depcheck

# Update dependencies in package.json
ncu -u

# Install updated dependencies
npm install

