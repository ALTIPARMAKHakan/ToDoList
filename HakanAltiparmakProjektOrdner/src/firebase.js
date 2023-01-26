// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3F5K1MBgsYsVfW5Q4drRaoyUZ16eX6OI",
  authDomain: "notebook-a6459.firebaseapp.com",
  projectId: "notebook-a6459",
  storageBucket: "notebook-a6459.appspot.com",
  messagingSenderId: "660260634679",
  appId: "1:660260634679:web:cef9f4c389aa4469827fb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
