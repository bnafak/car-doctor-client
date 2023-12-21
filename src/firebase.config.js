

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, // "AIzaSyBVGUqHBuHumUpdR2szwnX7lU6HSt3eyd8",
  authDomain: import.meta.env.VITE_authDomain, // "cars-doctor-fd06c.firebaseapp.com",
  projectId: import.meta.env.VITE_projectId, // "cars-doctor-fd06c",
  storageBucket: import.meta.env.VITE_storageBucket, // "cars-doctor-fd06c.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId, // "944822035741",
  appId: import.meta.env.VITE_appId // "1:944822035741:web:15f6ff6128331ca9e12df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;