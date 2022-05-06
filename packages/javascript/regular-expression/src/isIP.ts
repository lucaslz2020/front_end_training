const IP_REGEXP =
  /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;

export const isIP = (IP?: string) => {
  if (!IP) {
    return false;
  }
  return IP_REGEXP.test(IP);
};
