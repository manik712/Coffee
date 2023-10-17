// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUBzxpfCzOgiQHljMo9G14DltrHdFlt8",
  authDomain: "coffee-store-fcf1a.firebaseapp.com",
  projectId: "coffee-store-fcf1a",
  storageBucket: "coffee-store-fcf1a.appspot.com",
  messagingSenderId: "709460883198",
  appId: "1:709460883198:web:af28832a0a0ce1907817af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;