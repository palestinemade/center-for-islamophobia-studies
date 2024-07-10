#!/bin/bash

echo "Installing global expo-cli"
npm install -g expo-cli

echo "Removing node_modules and package-lock.json"
rm -rf node_modules package-lock.json

echo "Running update-dependencies.sh script"
./update-dependencies.sh

echo "Installing specific version of expo-config-plugins"
npm install expo-config-plugins@0.0.3 --legacy-peer-deps

echo "Starting the build process with EAS"
eas build --profile development --platform android

