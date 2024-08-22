// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0p5ScMhjKDGQA1jrrZ0yjlvUOCEHJv-o",
  authDomain: "login-auth-fe0ca.firebaseapp.com",
  projectId: "login-auth-fe0ca",
  storageBucket: "login-auth-fe0ca.appspot.com",
  messagingSenderId: "432768774465",
  appId: "1:432768774465:web:2a451cd69d155d30a9b1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;