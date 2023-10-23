import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBdrYpxnZtF2s1BpxNqkzK9SZZgkEgnKQ",
  authDomain: "blog-vue-25d11.firebaseapp.com",
  projectId: "blog-vue-25d11",
  storageBucket: "blog-vue-25d11.appspot.com",
  messagingSenderId: "500907752298",
  appId: "1:500907752298:web:37d88bbc315043d7904313",
};

export const firebaseApp = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore
export const firestore = getFirestore(firebaseApp);

// Storage
export const storage = getStorage(firebaseApp);
