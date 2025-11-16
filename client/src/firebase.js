// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC39FyuZ19nhuvInWP2zktevfA76PGwj8Y",
  authDomain: "shastraapp-2a999.firebaseapp.com",
  projectId: "shastraapp-2a999",
  storageBucket: "shastraapp-2a999.firebasestorage.app",
  messagingSenderId: "762211520426",
  appId: "1:762211520426:web:357a325b41ce99649125d3",
  measurementId: "G-H0Y4TBRLMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export instances for use in Login.jsx
export { auth, googleProvider };
