import firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBMCQ9UmBrP6jpkaYPD146nkHQcvWQAjZs",
    authDomain: "users-poligon.firebaseapp.com",
    projectId: "users-poligon",
    storageBucket: "users-poligon.appspot.com",
    messagingSenderId: "451626711583",
    appId: "1:451626711583:web:63b56dac28f5d49389332a"
  });

  export const auth = app.auth()
  export default app
