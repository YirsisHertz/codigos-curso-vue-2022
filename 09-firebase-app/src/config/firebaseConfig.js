import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPP6MCpOoc3z-iH8UBm2y64iwRKv6fWLs",
  authDomain: "fir-vue3-ac595.firebaseapp.com",
  projectId: "fir-vue3-ac595",
  storageBucket: "fir-vue3-ac595.appspot.com",
  messagingSenderId: "461489261399",
  appId: "1:461489261399:web:864a28e067bf0092f20c12",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
