import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAZqJKLUgGT8tEchKfjDu4NAAVB9GZVssk',
  authDomain: 'crwn-db-1a9c5.firebaseapp.com',
  databaseURL: 'https://crwn-db-1a9c5.firebaseio.com',
  projectId: 'crwn-db-1a9c5',
  storageBucket: '',
  messagingSenderId: '801901049278',
  appId: '1:801901049278:web:752d5af94aa81d4d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
