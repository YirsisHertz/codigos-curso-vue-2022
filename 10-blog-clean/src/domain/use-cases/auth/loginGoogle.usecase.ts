import { AuthService } from "../../../services/auth.service";

export class LoginGoogleUseCase {
  static execute() {
    return AuthService.signInWithGoogle();
  }
}
