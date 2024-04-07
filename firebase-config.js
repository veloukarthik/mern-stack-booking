// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9LAh2xMqIxo4mhOqfxZtWvqHsbgUn8B4",
  authDomain: "kv-posts.firebaseapp.com",
  databaseURL: "https://kv-posts-default-rtdb.firebaseio.com",
  projectId: "kv-posts",
  storageBucket: "kv-posts.appspot.com",
  messagingSenderId: "674234984639",
  appId: "1:674234984639:web:59ca09b3efd150cd99fe0a",
  measurementId: "G-3XL7S2LPEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);