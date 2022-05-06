const CHINESE_REGEXP = /^[\u4e00-\u9fa5]*$/;

export const isOnlyChinese = (chinese?: string) => {
  if (!chinese) {
    return false;
  }
  return CHINESE_REGEXP.test(chinese);
};
