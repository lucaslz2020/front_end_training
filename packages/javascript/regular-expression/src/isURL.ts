import { isValidRegExp } from "./internel";

const URL_REGEXP =
  /^https?:\/\/(\w*:\w*@)?[-\w.]+(:\d+)?(\/([\w\/_.]*(\?\S+)?)?)?$/i;

export const isURL = isValidRegExp(URL_REGEXP);
