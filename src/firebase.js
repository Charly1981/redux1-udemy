// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWLACZSdkq31Bz6Q--aIRZrRk2bXh3c7Y",
  authDomain: "redux-udemy-98803.firebaseapp.com",
  projectId: "redux-udemy-98803",
  storageBucket: "redux-udemy-98803.appspot.com",
  messagingSenderId: "423319068276",
  appId: "1:423319068276:web:44413c9d8e083d9d92fb21",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };
