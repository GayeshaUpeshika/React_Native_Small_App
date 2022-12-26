import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDssFJAhLy3qUP8f4etiqqyrSGVDtle060",
  authDomain: "csse-6b036.firebaseapp.com",
  databaseURL: "https://csse-6b036-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "csse-6b036",
  storageBucket: "csse-6b036.appspot.com",
  messagingSenderId: "270688586619",
  appId: "1:270688586619:web:a63b13f71cf3839259cbde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
