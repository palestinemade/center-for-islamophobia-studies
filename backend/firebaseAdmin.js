// backend/firebaseAdmin.js
const admin = require('firebase-admin');
const path = require('path');
const serviceAccountPath = path.resolve(__dirname, 'serviceAccountKey.json');
console.log('Service Account Path in firebaseAdmin.js:', serviceAccountPath);
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

module.exports = { messaging };