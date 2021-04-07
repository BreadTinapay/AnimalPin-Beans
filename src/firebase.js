import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDBTSMWpbvzgEA3UVKqFLlb2SnFJaxrIQY",
  authDomain: "kirky-40ff2.firebaseapp.com",
  projectId: "kirky-40ff2",
  storageBucket: "kirky-40ff2.appspot.com",
  messagingSenderId: "337258414477",
  appId: "1:337258414477:web:3921654fe9918bd7db7dc4",
  measurementId: "G-CLBJE991FV"
};
// Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };

  