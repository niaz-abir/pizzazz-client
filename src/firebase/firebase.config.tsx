import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDihh9YSu-NjjLNjMEwD2PcYhUnAa76t6o",
  authDomain: "pizzazz-be263.firebaseapp.com",
  projectId: "pizzazz-be263",
  storageBucket: "pizzazz-be263.appspot.com",
  messagingSenderId: "192115554845",
  appId: "1:192115554845:web:33a93eb705a9481e69e4f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
