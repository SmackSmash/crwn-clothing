// Import firebase modules seperately
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Config from firebase when setting up project
const config = {
  apiKey: 'AIzaSyAZqJKLUgGT8tEchKfjDu4NAAVB9GZVssk',
  authDomain: 'crwn-db-1a9c5.firebaseapp.com',
  databaseURL: 'https://crwn-db-1a9c5.firebaseio.com',
  projectId: 'crwn-db-1a9c5',
  storageBucket: '',
  messagingSenderId: '801901049278',
  appId: '1:801901049278:web:752d5af94aa81d4d'
};

// Initialize firebase with fiven config
firebase.initializeApp(config);

// Function to add user to database
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
    } catch (err) {
      console.error('Error creating user', err.message);
    }
  }

  return userRef;
};

// Export firebase methods for use in app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google sign in - remember to enable on firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// Export method to use in app
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export entire library, just in case
export default firebase;
