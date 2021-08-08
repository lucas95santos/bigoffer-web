class AuthValidation {
  static validate(authenticationData, requiredFields) {
    let errors = null;

    // verificando se todos os campos obrigatórios foram preenchidos
    const emptyFields = requiredFields.filter(
      (field) => authenticationData[field] === '',
    );

    if (emptyFields.length) errors = { emptyFields };

    // verificando se o e-mail é valido
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(?:\.[a-z]+)?$/i;

    if (!emailRegex.test(String(authenticationData.email)))
      errors = { ...errors, invalidEmail: ['email'] };

    // verificando se as senhas tem mais de 6 caracteres
    if (authenticationData.password?.length < 6)
      errors = { ...errors, minPassword: ['password'] };

    if (authenticationData.confirmPassword?.length < 6)
      errors = {
        ...errors,
        minPassword: errors
          ? [
              ...(Array.isArray(errors.minPassword)
                ? errors.minPassword
                : [errors.minPassword]),
              'confirmPassword',
            ]
          : ['confirmPassword'],
      };

    // verificando se as senhas são iguais
    if (authenticationData.password !== authenticationData.confirmPassword)
      errors = {
        ...errors,
        differentPasswords: ['confirmPassword'],
      };

    // verificando se o nome tem mais de 3 caracteres
    if (authenticationData.name?.length < 3)
      errors = { ...errors, minLength: ['name'] };

    return errors;
  }
}

export { AuthValidation };
