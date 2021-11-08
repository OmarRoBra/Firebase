import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Constants from "expo-constants";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWF_2nWOsmkGKiILbT4CrIpRcGaGfepMg",
  authDomain: "auth-7a3e8.firebaseapp.com",
  projectId: "auth-7a3e8",
  storageBucket: "auth-7a3e8.appspot.com",
  messagingSenderId: "377318851196",
  appId: "1:377318851196:web:4498e277e0ed81b162bff9",
  measurementId: "G-5CBSR8YEQ8",
};
console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
