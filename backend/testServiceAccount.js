// backend/testServiceAccount.js
const path = require('path');
const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
console.log('Service Account Path:', serviceAccountPath);

try {
  const serviceAccount = require(serviceAccountPath);
  console.log('Service Account Loaded Successfully:', serviceAccount);
} catch (error) {
  console.error('Error loading Service Account:', error);
}