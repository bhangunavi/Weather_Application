// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnlUF1tiTqbNT_97zxPOKMvSgZqQAlSm8",
    authDomain: "weather-app-8dc6d.firebaseapp.com",
    projectId: "weather-app-8dc6d",
    storageBucket: "weather-app-8dc6d.appspot.com",
    messagingSenderId: "494026124889",
    appId: "1:494026124889:web:cbc9b996909ef775670b48",
    measurementId: "G-PBTNBLCGDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);