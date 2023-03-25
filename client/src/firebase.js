// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW5ZVm1SmrPynBDNLMRArU8VthdqsQQfA",
  authDomain: "pod-topics.firebaseapp.com",
  projectId: "pod-topics",
  storageBucket: "pod-topics.appspot.com",
  messagingSenderId: "234267553561",
  appId: "1:234267553561:web:a66bb9cbd217821f129f88",
  measurementId: "G-BT5ZRG8NQ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
