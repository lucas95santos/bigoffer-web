export const zipCodeFormatter = (code) => {
  let zipCode = code.replace(/\D/g, '');

  if (zipCode.length >= 9) {
    zipCode = zipCode.replace(/^(\d{5})(\d{3}).*/, '$1-$2');
  } else if (zipCode.length >= 6 && zipCode.length < 9) {
    zipCode = zipCode.replace(/^(\d{5})(\d{0,3}).*/, '$1-$2');
  } else {
    zipCode = zipCode.replace(/^(\d{0,5})/, '$1');
  }

  return zipCode;
};
