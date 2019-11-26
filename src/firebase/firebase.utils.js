import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBVnKGAKQjKDwSYoJ6gESLqfZhgJGOCpng',
  authDomain: 'ecommercereact-ff7f8.firebaseapp.com',
  databaseURL: 'https://ecommercereact-ff7f8.firebaseio.com',
  projectId: 'ecommercereact-ff7f8',
  storageBucket: 'ecommercereact-ff7f8.appspot.com',
  messagingSenderId: '64384194455',
  appId: '1:64384194455:web:eae5fe4c2a55e1132996d2'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
