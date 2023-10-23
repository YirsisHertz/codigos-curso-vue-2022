export const verifyPassword = (
  password: string,
  confirmationPassword: string
) => {
  return password === confirmationPassword;
};
