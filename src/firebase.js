import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTjlRMBxZwCdwXimEvhjLL1dl6Zo6pCW0",
  authDomain: "clone-48d7c.firebaseapp.com",
  projectId: "clone-48d7c",
  storageBucket: "clone-48d7c.appspot.com",
  messagingSenderId: "625325252785",
  appId: "1:625325252785:web:b1371ef49706abf2644290",
  measurementId: "G-JQGCVXR421",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
