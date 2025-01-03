import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBsooN5dMmAPPKIXvfXtonJ7IAsdRfXf60",
    authDomain: "movie-7e01a.firebaseapp.com",
    projectId: "movie-7e01a",
    storageBucket: "movie-7e01a.firebasestorage.app",
    messagingSenderId: "257946428619",
    appId: "1:257946428619:web:f5825860ed994288d5a74e",
    measurementId: "G-1RNGEQKD6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Analytics (if you need it)
const analytics = getAnalytics(app);

export default auth;