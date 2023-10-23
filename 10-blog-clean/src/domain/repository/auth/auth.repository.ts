import type { UserCredential } from "firebase/auth";

export abstract class AuthRepository {
  abstract signInEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;

  abstract signInWithGoogle(): Promise<UserCredential>;

  abstract registerUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential>;

  abstract logout(): Promise<void>;
}
