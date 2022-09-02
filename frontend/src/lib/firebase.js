// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2HhWQFJ7S8hEeqZdptgJQQ2r4jboQOus',
  authDomain: 'instagram-yt-e2dd4.firebaseapp.com',
  projectId: 'instagram-yt-e2dd4',
  storageBucket: 'instagram-yt-e2dd4.appspot.com',
  messagingSenderId: '573594088417',
  appId: '1:573594088417:web:01cf25cfc4693f4e6198a0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
