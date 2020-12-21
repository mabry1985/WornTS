import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyApF7STm3Jv20o1IXneo6lDVqvWji6ftNo",
  authDomain: "worn-1ab6c.firebaseapp.com",
  databaseURL: "https://worn-1ab6c.firebaseio.com",
  projectId: "worn-1ab6c",
  storageBucket: "worn-1ab6c.appspot.com",
  messagingSenderId: "44534598993",
  appId: "1:44534598993:web:6e10319dbef01b10189770",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch (err) {

    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;