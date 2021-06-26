import { firebase } from "@firebase/app"; //We downloaded firebase package via npm.
import "@firebase/storage"; //Firebase Services: For our storage
import "@firebase/firestore"; //Firebase Services: For our database

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA1Uj5TuPoB1P4ZtRMId6zom7ezmObRoqI",
  authDomain: "mystargram-3139f.firebaseapp.com",
  projectId: "mystargram-3139f",
  storageBucket: "mystargram-3139f.appspot.com",
  messagingSenderId: "674512566481",
  appId: "1:674512566481:web:263472959181601a45edf0",
};
// Initialize Firebase (Connects to the backend)
firebase.initializeApp(firebaseConfig);
// Initialize storage and firestore services
// Anytime we want to interact with the firestore or storage, we use these consts.
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }; //export so we can use in other files in the future.
