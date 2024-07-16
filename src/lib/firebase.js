import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'fir-chat-a647f.firebaseapp.com',
  projectId: 'fir-chat-a647f',
  storageBucket: 'fir-chat-a647f.appspot.com',
  messagingSenderId: '409631066444',
  appId: '1:409631066444:web:4ab5cfb436824b9732e7e9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
