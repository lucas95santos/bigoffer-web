export const phoneFormatter = (phone) => {
  let phoneNumber = phone.replace(/\D/g, '');
  phoneNumber = phoneNumber.replace(/^0/, '');

  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (phoneNumber.length > 7 && phoneNumber.length <= 10) {
    phoneNumber = phoneNumber.replace(
      /^(\d\d)(\d{4})(\d{0,4}).*/,
      '($1) $2-$3',
    );
  } else if (phoneNumber.length > 2 && phoneNumber.length <= 7) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else if (phone.trim() !== '') {
    phoneNumber = phoneNumber.replace(/^(\d*)/, '($1');
  }

  return phoneNumber;
};
