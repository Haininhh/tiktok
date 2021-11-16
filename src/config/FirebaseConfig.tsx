import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider
} from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD00GL6Rsapr9MwdGk1i-KsOhxkrRRGUOw",
  authDomain: "authorization-da952.firebaseapp.com",
  databaseURL:
    "https://console.firebase.google.com/project/authorization-da952/firestore/data/~2Frooms~2FufvVoNGoOw3SHM1HJelQ",
  projectId: "authorization-da952",
  storageBucket: "authorization-da952.appspot.com",
  messagingSenderId: "369086310243",
  appId: "1:369086310243:web:1943738551d04faae31556",
  measurementId: "G-RTESMWBW49",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export const serverStamp = firebase.firestore.Timestamp;
export { auth, db, facebookProvider, googleProvider };
