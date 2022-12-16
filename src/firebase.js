import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCq199dO_KewNmPXkGTEsfQRUEzYna_pCE',
    authDomain: 'chatappreact-fbv9.firebaseapp.com',
    projectId: 'chatappreact-fbv9',
    storageBucket: 'chatappreact-fbv9.appspot.com',
    messagingSenderId: '557224689525',
    appId: '1:557224689525:web:9105d817c9ebe66a2e9d3c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
