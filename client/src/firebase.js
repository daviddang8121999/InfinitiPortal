// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertyportal-c2f75.firebaseapp.com",
  projectId: "propertyportal-c2f75",
  storageBucket: "propertyportal-c2f75.appspot.com",
  messagingSenderId: "70036374394",
  appId: "1:70036374394:web:65bcd69dfbdb9d8bd10cc3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);