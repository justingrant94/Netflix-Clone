// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgbdH6LUUjweSp_SlHjmu4h8eINd1BUHw",
  authDomain: "react-netflix-clone-a6819.firebaseapp.com",
  projectId: "react-netflix-clone-a6819",
  storageBucket: "react-netflix-clone-a6819.appspot.com",
  messagingSenderId: "575469408918",
  appId: "1:575469408918:web:b1fa1e823a136a7375e8b7",
  measurementId: "G-8DKCHFHBFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
