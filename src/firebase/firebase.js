// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfOmEUGPJ5mmBl5pXX7VHXFawmyKSWl38",
  authDomain: "implementation-b72cf.firebaseapp.com",
  databaseURL: "https://implementation-b72cf-default-rtdb.firebaseio.com",
  projectId: "implementation-b72cf",
  storageBucket: "implementation-b72cf.appspot.com",
  messagingSenderId: "877611430961",
  appId: "1:877611430961:web:76f2c75bb93e27a2ab5110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { storage, app, db }