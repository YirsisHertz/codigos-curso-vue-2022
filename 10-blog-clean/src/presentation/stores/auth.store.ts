import { defineStore } from "pinia";
import { reactive } from "vue";

import { LoginEmailAndPasswordUseCase } from "../../domain/use-cases/auth/loginEmailAndPassword.usecase";
import { RegisterUseCase } from "@/domain/use-cases/auth/register.usecase";
import { verifyPassword } from "../../helpers/verifyPassword";
import { LogoutUseCase } from "../../domain/use-cases/auth/logout.usecase";
import { LoginGoogleUseCase } from "../../domain/use-cases/auth/loginGoogle.usecase";

const authFormInitialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const useAuthStore = defineStore("auth", () => {
  const authForm = reactive({ ...authFormInitialState });

  const resetForm = () => {
    authForm.email = authFormInitialState.email;
    authForm.password = authFormInitialState.password;
    authForm.confirmPassword = authFormInitialState.confirmPassword;
  };

  const loginWithEmailAndPassword = async () => {
    try {
      const user = await LoginEmailAndPasswordUseCase.execute(
        authForm.email,
        authForm.password
      );

      if (!user) {
        throw new Error("email or password incorrect");
      }

      return user;
    } catch (error) {
      console.log(error);
      resetForm();
    }
  };

  const registerWithEmailAndPassword = async () => {
    try {
      if (authForm.password.length < 6 && authForm.confirmPassword.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      if (!verifyPassword(authForm.password, authForm.confirmPassword)) {
        throw new Error("Password not consistent");
      }

      const user = await RegisterUseCase.execute(
        authForm.email,
        authForm.password
      );

      if (!user) {
        throw new Error("Not is possible create");
      }

      return user;
    } catch (error) {
      console.log(error);
      resetForm();
    }
  };

  const loginWithGoogle = async () => {
    try {
      const user = await LoginGoogleUseCase.execute();

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      console.log(error);
      resetForm();
    }
  };

  const logout = () => {
    return LogoutUseCase.execute();
  };

  return {
    authForm,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logout,
    registerWithEmailAndPassword,
    resetForm,
  };
});
