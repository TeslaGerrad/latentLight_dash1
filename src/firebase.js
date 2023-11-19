import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "newapp-44e89.firebaseapp.com",
  projectId: "newapp-44e89",
  storageBucket: "newapp-44e89.appspot.com",
  messagingSenderId: "198032342350",
  appId: "1:198032342350:web:22d5390037840cca24321f",
  measurementId: "G-R8DY15XDW1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
