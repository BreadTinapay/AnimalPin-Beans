import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATSbKk-5LEOH9oe_tCe8mCmMHk6iNG1Ik",
    authDomain: "bread-works-corporation.firebaseapp.com",
    projectId: "bread-works-corporation",
    storageBucket: "bread-works-corporation.appspot.com",
    messagingSenderId: "398572477328",
    appId: "1:398572477328:web:97d8940813bc80786ef115",
    measurementId: "G-NSTJ5XJSH3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };