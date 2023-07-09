import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNaDpFpeNCfrWPuEvBAJIwQTKvNbuKtjo",
    authDomain: "twitter-clone-9caf6.firebaseapp.com",
    projectId: "twitter-clone-9caf6",
    storageBucket: "twitter-clone-9caf6.appspot.com",
    messagingSenderId: "231119820005",
    appId: "1:231119820005:web:3adee4064361a23990700c",
    measurementId: "G-C7J1YVYE49"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;