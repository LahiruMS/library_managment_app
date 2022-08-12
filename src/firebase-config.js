import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUNkJiLtefzT22Ffr4PpnAEXINvSbluww",
  authDomain: "react-crud-e8470.firebaseapp.com",
  projectId: "react-crud-e8470",
  storageBucket: "react-crud-e8470.appspot.com",
  messagingSenderId: "232670847874",
  appId: "1:232670847874:web:0a606ee4d262f62860a59b",
  measurementId: "G-DL7WWKN7CH"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);