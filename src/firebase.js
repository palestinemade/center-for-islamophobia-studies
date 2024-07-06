// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuk_78JbDqamiw0OkWx34DfDlS9Sn9UMg",
  authDomain: "islamophobia-502d7.firebaseapp.com",
  projectId: "islamophobia-502d7",
  storageBucket: "islamophobia-502d7.appspot.com",
  messagingSenderId: "463425974622",
  appId: "1:463425974622:web:0356b9cab457ae6bd1dfcf",
  measurementId: "G-QEHX66ZD3V"
};

let app;
let auth;
let firestore;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  // Initialize Firebase Auth with AsyncStorage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });

  // Initialize Firestore
  firestore = getFirestore(app);
  
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}

export { app, auth, firestore };
