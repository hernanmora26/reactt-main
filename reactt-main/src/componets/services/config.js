import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "reactappmoraleshernan.firebaseapp.com",
  projectId: "reactappmoraleshernan",
  storageBucket: "reactappmoraleshernan.appspot.com",
  messagingSenderId: "603581467602",
  appId: "1:603581467602:web:9dd9b615f737fe518f560b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);