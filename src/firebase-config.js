import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlJuunGWxBatUsZOJ_SAgys5yaG355npM",
    authDomain: "delivery-app-9b900.firebaseapp.com",
    projectId: "delivery-app-9b900",
    storageBucket: "delivery-app-9b900.appspot.com",
    messagingSenderId: "550951656776",
    appId: "1:550951656776:web:eafecff18b6ca1681d677d"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();