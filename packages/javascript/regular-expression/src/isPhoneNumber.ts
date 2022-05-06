const PHONE_NUMBER_REGEXP = /^1\d{10}$/;

export const isPhoneNumber = (phoneNumber?: string) => {
  if (!phoneNumber) {
    return false;
  }
  return PHONE_NUMBER_REGEXP.test(phoneNumber);
};
