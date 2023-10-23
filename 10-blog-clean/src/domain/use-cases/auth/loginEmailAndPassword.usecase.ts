import type { UserCredential } from "firebase/auth";
import { AuthService } from "../../../services/auth.service";

export class LoginEmailAndPasswordUseCase {
  static execute(email: string, password: string): Promise<UserCredential> {
    return AuthService.signInWithEmailAndPassword(email, password);
  }
}
