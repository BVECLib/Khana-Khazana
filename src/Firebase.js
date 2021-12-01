import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC9bODEDfOCj0hbg6w1z4PQOUUB6lMYdXI",
  authDomain: "project-dev-7f561.firebaseapp.com",
  projectId: "project-dev-7f561",
  storageBucket: "project-dev-7f561.appspot.com",
  messagingSenderId: "1075955847431",
  appId: "1:1075955847431:web:7c80abd333ce23759875a2"
});
firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export default app;
export { projectStorage, projectFirestore, timestamp };
