class AuthValidation {
  static signIn(authenticationData) {
    const requiredFields = ['email', 'password'];

    // verificando se todos os campos obrigatórios foram preenchidos
    const emptyFields = requiredFields.filter(
      (field) => authenticationData[field] === '',
    );

    return emptyFields.length === 0 ? null : emptyFields;
  }

  static signUp(authenticationData) {
    const requiredFields = ['name', 'email', 'password', 'confirmPassword'];

    // verificando se todos os campos obrigatórios foram preenchidos
    const emptyFields = requiredFields.filter(
      (field) => authenticationData[field] === '',
    );

    return emptyFields.length === 0 ? null : emptyFields;
  }
}

export { AuthValidation };
