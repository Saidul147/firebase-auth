// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnHhWX-_4bNd_h4CmfGini_NVtUE8Ogzk",
  authDomain: "project-one-a5edf.firebaseapp.com",
  projectId: "project-one-a5edf",
  storageBucket: "project-one-a5edf.firebasestorage.app",
  messagingSenderId: "940442366495",
  appId: "1:940442366495:web:f1d0b3aa7505ffd0455b2a",
  measurementId: "G-TMXQHH6Y1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);