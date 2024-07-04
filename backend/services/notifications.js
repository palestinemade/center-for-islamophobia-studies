// backend/services/notifications.js
const { messaging } = require('../firebaseAdmin');
console.log('Messaging Service Loaded in notifications.js');

const sendNotification = (message) => {
  messaging.send(message)
    .then(response => {
      console.log('Successfully sent message:', response);
    })
    .catch(error => {
      console.log('Error sending message:', error);
    });
};

module.exports = { sendNotification };