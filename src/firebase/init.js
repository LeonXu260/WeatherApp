import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "weatherapp-f1a10.firebaseapp.com",
  projectId: "weatherapp-f1a10",
  storageBucket: "weatherapp-f1a10.appspot.com",
  messagingSenderId: "560912288743",
  appId: "1:560912288743:web:ee75e4c0c2a23f58110b42",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
