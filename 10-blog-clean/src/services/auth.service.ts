import { AuthRepository } from "../domain/repository/auth/auth.repository";

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  public signInWithEmailAndPassword(email: string, password: string) {
    return this.authRepository.signInEmailAndPassword(email, password);
  }

  public signInWithGoogle() {
    return this.authRepository.signInWithGoogle();
  }

  public registerUserWithEmailAndPassword(email: string, password: string) {
    return this.authRepository.registerUserWithEmailAndPassword(
      email,
      password
    );
  }

  public logout() {
    return this.authRepository.logout();
  }
}
