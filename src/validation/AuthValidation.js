class AuthValidation {
  static validate(authenticationData, requiredFields) {
    let errors = null;

    // verificando se todos os campos obrigatórios foram preenchidos
    const emptyFields = requiredFields.filter(
      (field) => authenticationData[field] === '',
    );

    if (emptyFields.length) errors = { emptyFields };

    return errors;
  }
}

export { AuthValidation };
