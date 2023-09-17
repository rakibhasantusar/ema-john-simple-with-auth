// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKVeCOR4gJa_GviQEWEW-iUtUSz5eWYpg",
    authDomain: "ema-john-simple-auth-bd.firebaseapp.com",
    projectId: "ema-john-simple-auth-bd",
    storageBucket: "ema-john-simple-auth-bd.appspot.com",
    messagingSenderId: "608720882909",
    appId: "1:608720882909:web:4e4204fb41c895d56f5f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app