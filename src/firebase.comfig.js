// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// 
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.vite_apiKey, 
//   authDomain:import.meta.env.vite_authDomain, 
//   projectId:import.meta.env.vite_projectId, 
//   storageBucket:import.meta.env.vite_storageBucket,
//   messagingSenderId:import.meta.env.vite_messagingSenderId,
//   appId:import.meta.env.vite_appId
// };
// 
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGUqHBuHumUpdR2szwnX7lU6HSt3eyd8",
  authDomain: "cars-doctor-fd06c.firebaseapp.com",
  projectId: "cars-doctor-fd06c",
  storageBucket: "cars-doctor-fd06c.appspot.com",
  messagingSenderId: "944822035741",
  appId: "1:944822035741:web:15f6ff6128331ca9e12df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;