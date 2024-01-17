// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkIpWM7Vo_NsAwz6hj0ccwE6EECiiCtdY",
  authDomain: "chatflix-e5274.firebaseapp.com",
  projectId: "chatflix-e5274",
  storageBucket: "chatflix-e5274.appspot.com",
  messagingSenderId: "818676739003",
  appId: "1:818676739003:web:6e6572ebe248c809a5729e",
  measurementId: "G-25XY74CHSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)