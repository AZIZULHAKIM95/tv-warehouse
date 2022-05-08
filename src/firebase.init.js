// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP0dyxhyFuanaUwgab1AFDXC61UkacMC8",
    authDomain: "warehouse-assignment-client.firebaseapp.com",
    projectId: "warehouse-assignment-client",
    storageBucket: "warehouse-assignment-client.appspot.com",
    messagingSenderId: "423364362729",
    appId: "1:423364362729:web:d6dcd42e03da2da2250b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;