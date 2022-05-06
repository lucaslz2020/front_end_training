const ID_CARD_REGEXP = /^[1-8]\d{5}[1-2]\d{3}[01]\d[0-3]\d{4}(\d|X)$/i;

export const isIDCard = (IDCard?: string) => {
  if (!IDCard) {
    return false;
  }
  return ID_CARD_REGEXP.test(IDCard);
};
