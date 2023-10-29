import { AuthService } from "../../../services/auth.service";
import { AuthModel } from "../../../database/auth/auth.model";

export class RegisterUseCase {
  static execute(email: string, password: string) {
    return new AuthService(new AuthModel()).registerUserWithEmailAndPassword(
      email,
      password
    );
  }
}
