import { isValidRegExp } from "./internel";

const PHONE_NUMBER_REGEXP = /^1\d{10}$/;

export const isPhoneNumber = isValidRegExp(PHONE_NUMBER_REGEXP);
