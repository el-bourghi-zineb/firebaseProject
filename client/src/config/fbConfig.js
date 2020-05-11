import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 import 'firebase/storage';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAnSIoRRt42JsZmFAwCOIIssKE0aFM_hpk",
    authDomain: "fir-project-3fc2d.firebaseapp.com",
    databaseURL: "https://fir-project-3fc2d.firebaseio.com",
    projectId: "fir-project-3fc2d",
    storageBucket: "fir-project-3fc2d.appspot.com",
    messagingSenderId: "161436817012",
    appId: "1:161436817012:web:c3c3703b813ddef0182321"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  fire.firestore();



  export default fire;
