
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCv1M7oYglV6PqvNLjxg5CgbVt3oe-TrXQ",
  authDomain: "tasks-11837.firebaseapp.com",
  projectId: "tasks-11837",
  storageBucket: "tasks-11837.appspot.com",
  messagingSenderId: "325898834702",
  appId: "1:325898834702:web:ca74bbb6a8edaf93dffd5f",
};

if(!firebase.app.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;