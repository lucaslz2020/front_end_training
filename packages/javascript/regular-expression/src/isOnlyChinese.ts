import { isValidRegExp } from "./internel";

const CHINESE_REGEXP = /^[\u4e00-\u9fa5]*$/;

export const isOnlyChinese = isValidRegExp(CHINESE_REGEXP);
