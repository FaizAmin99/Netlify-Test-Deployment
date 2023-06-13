// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyBAYOodwu1beXTbw0zjhnecjGykgIdQZro",
  authDomain: "auth-2fc4e.firebaseapp.com",
  databaseURL: "https://auth-2fc4e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-2fc4e",
  storageBucket: "auth-2fc4e.appspot.com",
  messagingSenderId: "580593972277",
  appId: "1:580593972277:web:c8a5041133138f0b9fad7c",
  measurementId: "G-XYWTRWX3SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);