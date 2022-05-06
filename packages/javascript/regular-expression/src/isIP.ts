import { isValidRegExp } from "./internel";

const IP_REGEXP =
  /^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;

export const isIP = isValidRegExp(IP_REGEXP);
