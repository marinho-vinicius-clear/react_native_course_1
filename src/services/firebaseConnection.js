import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA5CjWPZ8rVRXpyOEAy1UNKZKs6ZuEVyAo",
  authDomain: "finances-d9b8f.firebaseapp.com",
  projectId: "finances-d9b8f",
  storageBucket: "finances-d9b8f.appspot.com",
  messagingSenderId: "183468802043",
  appId: "1:183468802043:web:7ab451b25dc30c5f95555e"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
