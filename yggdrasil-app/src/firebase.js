// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWZXZvd8inQSBUK4krOG4qZzBsfgAyz_o",
  authDomain: "yggdrasil-d6dfd.firebaseapp.com",
  projectId: "yggdrasil-d6dfd",
  storageBucket: "yggdrasil-d6dfd.firebasestorage.app",
  messagingSenderId: "73743882023",
  appId: "1:73743882023:web:747ca3f3004c47fa68fb02",
  measurementId: "G-4DMFPDJ35G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);