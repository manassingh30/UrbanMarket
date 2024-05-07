import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo-IiQ5LsnYCRn5XdSJw4l8zQoYmkp-js",
  authDomain: "urbanmarket-b81a3.firebaseapp.com",
  projectId: "urbanmarket-b81a3",
  storageBucket: "urbanmarket-b81a3.appspot.com",
  messagingSenderId: "299649570329",
  appId: "1:299649570329:web:12283e5eb563126fb47c88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;