// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwIrPR16AIIjRLd73VooY_Rz_SyE2xjOo",
  authDomain: "ecom-boilerplate-229c4.firebaseapp.com",
  projectId: "ecom-boilerplate-229c4",
  storageBucket: "ecom-boilerplate-229c4.appspot.com",
  messagingSenderId: "620201940319",
  appId: "1:620201940319:web:1f87d2290bffa5ae7612ea"
};

// Initialize Firebase
//This checks if anything is in the database, if not then it initializes it
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const app = !firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = getFirestore();

export default db;