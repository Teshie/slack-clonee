import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBF3KMA4OOzUo7mIKS_iIoIBrIxTOv7b2c",
  authDomain: "slack-clone-a49ae.firebaseapp.com",
  projectId: "slack-clone-a49ae",
  storageBucket: "slack-clone-a49ae.appspot.com",
  messagingSenderId: "440217459298",
  appId: "1:440217459298:web:98753e610f61f3aaf5cf3b",
  measurementId: "G-KFC2KH12PM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
