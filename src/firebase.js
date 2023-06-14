// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
// for the firestore DB
const firestore = getFirestore(app);

export { auth };