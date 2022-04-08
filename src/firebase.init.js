// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx7IlVFMvZFft7hC7RTT2mLk8Lz7bR_Zw",
    authDomain: "router-firebase-integrat-575db.firebaseapp.com",
    projectId: "router-firebase-integrat-575db",
    storageBucket: "router-firebase-integrat-575db.appspot.com",
    messagingSenderId: "38196594913",
    appId: "1:38196594913:web:8060e2b40ab8b49bca4fa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;