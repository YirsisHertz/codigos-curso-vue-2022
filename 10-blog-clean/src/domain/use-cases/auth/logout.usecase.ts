import { AuthService } from "../../../services/auth.service";

export class LogoutUseCase {
  static execute() {
    return AuthService.logout();
  }
}
