export const isValidRegExp = (regExp: RegExp) => (string?: string) => {
  if (!string) {
    return false;
  }
  return regExp.test(string);
};
