// src/config/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBkPi5spGKFF7pmIPyD_6d4mxMQ6wQsJOM",
  authDomain: "kimbo-auth-fe982.firebaseapp.com",
  projectId: "kimbo-auth-fe982",
  storageBucket: "kimbo-auth-fe982.firebasestorage.app",
  messagingSenderId: "660697464736",
  appId: "1:660697464736:web:b8c8df900e285e485c6ec5",
  measurementId: "G-D6N0DDDD0X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };