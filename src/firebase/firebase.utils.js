import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcEroQr1l6BMAuS_WM_22B4sjmh34Rxws",
  authDomain: "crwn-db-6085a.firebaseapp.com",
  databaseURL: "https://crwn-db-6085a.firebaseio.com",
  projectId: "crwn-db-6085a",
  storageBucket: "",
  messagingSenderId: "770136554888",
  appId: "1:770136554888:web:b539d31608b14f0f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
