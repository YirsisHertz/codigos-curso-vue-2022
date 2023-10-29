import { AuthService } from "../../../services/auth.service";
import { AuthModel } from "../../../database/auth/auth.model";

export class LogoutUseCase {
  static execute() {
    return new AuthService(new AuthModel()).logout();
  }
}
