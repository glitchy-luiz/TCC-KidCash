// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBuEXy4Iu6SmbHicILRJvaXZGsJs7QpZY",
  authDomain: "db-kidcash.firebaseapp.com",
  projectId: "db-kidcash",
  storageBucket: "db-kidcash.appspot.com",
  messagingSenderId: "221903420743",
  appId: "1:221903420743:web:28f595631397d1cbb0e062",
  measurementId: "G-4J9C5LVJEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);