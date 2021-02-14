import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD-hrbnVvNlUV4YDdXyI5XxMq-159drIik",
    authDomain: "my-portfolio-5c661.firebaseapp.com",
    projectId: "my-portfolio-5c661",
    storageBucket: "my-portfolio-5c661.appspot.com",
    messagingSenderId: "413371372738",
    appId: "1:413371372738:web:d7ffeade8a711b42f3975b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;