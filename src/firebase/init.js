// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Adding the Firebase services that we want to use
import "firebase/auth";
import "firebase/firestore";

// The web app's Firebase configuration
var config = {
  apiKey: "AIzaSyC8w26ewoU0KIbx2CKlQOhEPROACv0E8xc",
  authDomain: "fitnessapp-41c9d.firebaseapp.com",
  databaseURL: "https://fitnessapp-41c9d.firebaseio.com",
  projectId: "fitnessapp-41c9d",
  storageBucket: "fitnessapp-41c9d.appspot.com",
  messagingSenderId: "735926672657",
  appId: "1:735926672657:web:25e7903660e73382f3c0b0",
};

const firebaseApp = firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore();
