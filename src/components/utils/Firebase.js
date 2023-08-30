// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBlMwE2kKObRwe_mwRhgs_O-mKzVqLWrE",
  authDomain: "netflixgpt-f9616.firebaseapp.com",
  projectId: "netflixgpt-f9616",
  storageBucket: "netflixgpt-f9616.appspot.com",
  messagingSenderId: "328789861729",
  appId: "1:328789861729:web:d961368444a37701c29120",
  measurementId: "G-YW94FF0JPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
