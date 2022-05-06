const EMAIL_NUMBER_REGEXP = /^(\w+\.)*\w+@(\w+\.)+[A-Za-z]+$/i;

export const isEmail = (email?: string) => {
  if (!email) {
    return false;
  }
  return EMAIL_NUMBER_REGEXP.test(email);
};
