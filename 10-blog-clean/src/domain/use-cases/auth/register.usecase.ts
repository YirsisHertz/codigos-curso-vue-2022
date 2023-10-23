import { AuthService } from "../../../services/auth.service";

export class RegisterUseCase {
  static execute(email: string, password: string) {
    return AuthService.registerUserWithEmailAndPassword(email, password);
  }
}
