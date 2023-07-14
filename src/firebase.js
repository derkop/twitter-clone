import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6JSJ1worVkmOpOrqrROhZe1SBVZdGxL0",
  authDomain: "twitter-clone-ebfce.firebaseapp.com",
  projectId: "twitter-clone-ebfce",
  storageBucket: "twitter-clone-ebfce.appspot.com",
  messagingSenderId: "21706297642",
  appId: "1:21706297642:web:13f30e1a97f315f82cce53",
  measurementId: "G-E19RZ96R4C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

export default db;