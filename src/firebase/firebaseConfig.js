// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg8q6V1rOmjykhl6YaInI9VYxMguMnSbU",
  authDomain: "vassar2-7c3f2.firebaseapp.com",
  projectId: "vassar2-7c3f2",
  storageBucket: "vassar2-7c3f2.appspot.com",
  messagingSenderId: "733175730887",
  appId: "1:733175730887:web:a637219400aecec87c64e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)