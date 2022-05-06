import { isValidRegExp } from "./internel";

const EMAIL_NUMBER_REGEXP = /^(\w+\.)*\w+@(\w+\.)+[A-Za-z]+$/i;

export const isEmail = isValidRegExp(EMAIL_NUMBER_REGEXP);
