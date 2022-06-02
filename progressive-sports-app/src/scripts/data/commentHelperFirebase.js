// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6qdGSGDxOWAUwDpB_BiZ337lFNakuPvY",
    authDomain: "pws-webapp.firebaseapp.com",
    databaseURL: "https://pws-webapp-default-rtdb.firebaseio.com",
    projectId: "pws-webapp",
    storageBucket: "pws-webapp.appspot.com",
    messagingSenderId: "623078842606",
    appId: "1:623078842606:web:e8f8a0e022b51127c393ff",
    measurementId: "G-SMF9V2RWGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);






export default db;