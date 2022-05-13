const firebase = require("firebase-admin");

const firebaseConfig = {
    apiKey: "AIzaSyAWyciLduqXnYcCISEPO4zA3Vv4j43p60Q",
    authDomain: "users-bf39c.firebaseapp.com",
    projectId: "users-bf39c",
    storageBucket: "users-bf39c.appspot.com",
    messagingSenderId: "451485676399",
    appId: "1:451485676399:web:4fb137e7515cac2c73ae9a",
    measurementId: "G-02JL4347LP"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;