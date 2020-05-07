import * as firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-jrlHORZlv2g225zVmEJVu7jGcKGPAWE",
  authDomain: "utcodequiz.firebaseapp.com",
  databaseURL: "https://utcodequiz.firebaseio.com",
  projectId: "utcodequiz",
  storageBucket: "utcodequiz.appspot.com",
  messagingSenderId: "527259694268",
  appId: "1:527259694268:web:6d7faedad1f912c9c64cb9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
