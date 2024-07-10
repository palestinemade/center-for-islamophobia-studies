const path = require('path');
const fs = require('fs');

const autolinkingPath = path.resolve(__dirname, 'node_modules/expo/scripts');
const autolinkingPathFile = path.resolve(__dirname, 'autolinkingPath.txt');

fs.writeFileSync(autolinkingPathFile, autolinkingPath);
console.log(`Autolinking path written to ${autolinkingPathFile}`);
