const URL_REGEXP =
  /^https?:\/\/(\w*:\w*@)?[-\w.]+(:\d+)?(\/([\w\/_.]*(\?\S+)?)?)?$/i;

export const isURL = (URL?: string) => {
  if (!URL) {
    return false;
  }
  return URL_REGEXP.test(URL);
};
