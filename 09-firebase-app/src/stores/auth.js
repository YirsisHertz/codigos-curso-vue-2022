import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../config/firebaseConfig";

export const authStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async loginWithGoogle() {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());

      console.log(user);
    },
    async loginWithFacebook() {
      const user = await signInWithPopup(auth, new FacebookAuthProvider());

      console.log(user);
    },
  },
});
