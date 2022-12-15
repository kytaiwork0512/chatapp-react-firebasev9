import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCHDse96cEY5dJ9MT4YgveyAXmzFpjgWVk',
    authDomain: 'chat-app-react-7f45d.firebaseapp.com',
    projectId: 'chat-app-react-7f45d',
    storageBucket: 'chat-app-react-7f45d.appspot.com',
    messagingSenderId: '292722972715',
    appId: '1:292722972715:web:0a1de6cc9474aff2dff26e',
    measurementId: 'G-7QNMYYYNRR',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const db = getFirestore(app);

export { auth, db, analytics, doc, onSnapshot };
export default firebase;
