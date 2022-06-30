// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT-APP-FIREBASE_APIKEY,
  authDomain: process.env.REACT-APP-FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT-APP-FIREBASE_PROJECTID,
  storageBucket: process.env.REACT-APP-FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT-APP-FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT-APP-FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db

import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

export const enviar = await setDoc(doc(db, "usuarios", "diego.rojas@mocion.com.co"), data);