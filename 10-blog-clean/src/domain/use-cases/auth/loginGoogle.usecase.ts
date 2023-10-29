import { AuthService } from "../../../services/auth.service";
import { AuthModel } from "../../../database/auth/auth.model";

export class LoginGoogleUseCase {
  static execute() {
    return new AuthService(new AuthModel()).signInWithGoogle();
  }
}
