import React, { useState, useCallback } from 'react';

const SignIn = React.memo(
  ({
    onAuthenticationSubmit,
    changeAuthenticationTo,
    authentication,
    errors,
  }) => {
    // state
    const [signInData, setSignInData] = useState({
      email: '',
      password: '',
    });

    // handlers
    const handleInputChange = useCallback((field, value) => {
      setSignInData((oldSignInData) => ({
        ...oldSignInData,
        [field]: value,
      }));
    }, []);

    const handleErrors = useCallback(
      (field) => {
        const fieldErrors = [];

        if (errors) {
          Object.keys(errors).forEach((errorKey) => {
            if (errors[errorKey].includes(field)) {
              fieldErrors.push(errorKey);
            }
          });
        }

        return fieldErrors;
      },
      [errors],
    );

    return (
      <div className="authentication">
        <div className="authentication__title">
          <h2>
            Informe seu email <br /> e senha nos campos <br /> abaixo
          </h2>
        </div>

        <form
          onSubmit={(event) => onAuthenticationSubmit(event, signInData)}
          className="authentication__form"
        >
          <input
            type="email"
            placeholder="Digite seu email aqui"
            className={`${handleErrors('email').length && 'input-error'}`}
            value={signInData.email}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          <input
            type="password"
            placeholder="Digite sua senha aqui"
            className={`mt_16 ${
              handleErrors('password').length && 'input-error'
            }`}
            value={signInData.password}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />

          <button type="submit" className="solid">
            Acessar
          </button>
        </form>

        <div className="authentication__footer">
          <small>Não possui conta?</small>
          <button
            type="button"
            className="outlined no-border"
            onClick={() => changeAuthenticationTo(authentication.SIGN_UP)}
          >
            Cadastre-se agora
          </button>
        </div>
      </div>
    );
  },
);

export default SignIn;
