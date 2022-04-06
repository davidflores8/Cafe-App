// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVnUdrSnI6LXAQxYkP3ztVQz0sG6JJl2o",
  authDomain: "cafe-app-b9cf9.firebaseapp.com",
  databaseURL: "https://cafe-app-b9cf9-default-rtdb.firebaseio.com",
  projectId: "cafe-app-b9cf9",
  storageBucket: "cafe-app-b9cf9.appspot.com",
  messagingSenderId: "708840867854",
  appId: "1:708840867854:web:fa17db29882415894b145f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
