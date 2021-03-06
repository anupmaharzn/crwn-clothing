import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZmpC-_5413iucmlksBVE4_AbQuH2t6LE",
    authDomain: "crwn-db-bf93a.firebaseapp.com",
    projectId: "crwn-db-bf93a",
    storageBucket: "crwn-db-bf93a.appspot.com",
    messagingSenderId: "999170031351",
    appId: "1:999170031351:web:f6c74446fbab1fafb29df2",
    measurementId: "G-3T7DF85PXW"
  };


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt:'select_account'
    }
);
//signinwithgoogle functinality ho firebaseko and popup le provider linxa jun google chai ho
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
