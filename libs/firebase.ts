// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB44rOI8ZgedBZ1NRPG4kHl6qOoR8crDPM",
  authDomain: "shop-22e7e.firebaseapp.com",
  projectId: "shop-22e7e",
  storageBucket: "shop-22e7e.firebasestorage.app",
  messagingSenderId: "372305781797",
  appId: "1:372305781797:web:213367ceedf9ffc96b0bcc",
  measurementId: "G-C62BD2F3LN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;