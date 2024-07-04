// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'; // Keep this if using analytics
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAuk_78JbDqamiw0OkWx34DfDlS9Sn9UMg",
  authDomain: "islamophobia-502d7.firebaseapp.com",
  projectId: "islamophobia-502d7",
  storageBucket: "islamophobia-502d7.appspot.com",
  messagingSenderId: "463425974622",
  appId: "1:463425974622:web:0356b9cab457ae6bd1dfcf",
  measurementId: "G-QEHX66ZD3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // eslint-disable-line no-unused-vars
const messaging = getMessaging(app);

// Request permission to send notifications
const requestPermission = async () => {
  try {
    await Notification.requestPermission();
    console.log('Notification permission granted.');
    
    // Get the token
    const token = await getToken(messaging, { vapidKey: 'BJd4ypeIsxpLCxwO2Z8m7eO1uGj9G9TQJvc0Bi82MJQf8TQSY8J6abE2_zwioTPDSO-QQVEFA_CqIU62rS89DBU' });
    console.log('FCM Token:', token);
    // Send the token to your server to subscribe the user to the topic
  } catch (err) {
    console.log('Unable to get permission to notify.', err);
  }
};

// Handle incoming messages
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // Customize notification handling here
});

// Call the request permission function
requestPermission();

export { messaging };
