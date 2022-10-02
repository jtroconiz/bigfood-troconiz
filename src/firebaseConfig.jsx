// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsLHDiEIvf8Hfb4Iuz9vpSaIuqEhivJM",
  authDomain: "bigfood-81c17.firebaseapp.com",
  projectId: "bigfood-81c17",
  storageBucket: "bigfood-81c17.appspot.com",
  messagingSenderId: "986573606847",
  appId: "1:986573606847:web:8ac98b93a747c14c061b0a",
  // measurementId: "G-K37MQ4J36W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
