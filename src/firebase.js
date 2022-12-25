import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwU5sGqqy3N-AVW2wKwApPMoYePagz57s",
  authDomain: "slack-clone-48413.firebaseapp.com",
  projectId: "slack-clone-48413",
  storageBucket: "slack-clone-48413.appspot.com",
  messagingSenderId: "537168994759",
  appId: "1:537168994759:web:76b4b663a19c10ce2679e2",
  measurementId: "G-0HSM9RTQN1"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);;
const db = FirebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;