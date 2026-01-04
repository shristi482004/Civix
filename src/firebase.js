// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoRfMb8R8ZCF4Jhz8uyhKEDCG2jOVSdqM",
  authDomain: "civix-7f8d2.firebaseapp.com",
  projectId: "civix-7f8d2",
  storageBucket: "civix-7f8d2.firebasestorage.app",
  messagingSenderId: "849865315616",
  appId: "1:849865315616:web:3277cee5a8b5ecdac3f345",
 
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore(app); 