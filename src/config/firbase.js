// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { createInitialAdmin } from './createAdmin'; // Ensure the path is correct

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvr9KTS8BeSmv_y6Ui3tBNXMl0mkyumqQ",
  authDomain: "hotel-elliot-42763.firebaseapp.com",
  projectId: "hotel-elliot-42763",
  storageBucket: "hotel-elliot-42763.appspot.com",
  messagingSenderId: "27360609901",
  appId: "1:27360609901:web:6358470a13ea6f72e06164",
  measurementId: "G-10MQBGRK73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Create an initial admin user
const adminUid = 'elliot';
const adminEmail = 'admin@gmail.com';
createInitialAdmin(adminUid, adminEmail);

// Export the necessary services
export { auth, db }; // Export both auth and db
