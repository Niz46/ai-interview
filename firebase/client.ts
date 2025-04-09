
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7LUgtyZlCwFQZuiir5sGqm_9jlzZRe7c",
  authDomain: "prepwise-23636.firebaseapp.com",
  projectId: "prepwise-23636",
  storageBucket: "prepwise-23636.firebasestorage.app",
  messagingSenderId: "971553780390",
  appId: "1:971553780390:web:ddeee0d0839d7ade84fa67",
  measurementId: "G-RVTF7B8GYQ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);