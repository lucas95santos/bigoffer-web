import React, { useState, useCallback } from 'react';
// errors
import AuthErrors from '../../errors/AuthErrors';
// components
import { CustomInput as Input } from '../../components';
// icons
import { FiMail, FiLock } from 'react-icons/fi';

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
              fieldErrors.push(AuthErrors[errorKey]);
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
          <Input
            type="text"
            placeholder="E-mail"
            value={signInData.email}
            onTextChange={(event) =>
              handleInputChange('email', event.target.value)
            }
            icon={FiMail}
            errors={handleErrors('email')}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={signInData.password}
            onTextChange={(event) =>
              handleInputChange('password', event.target.value)
            }
            icon={FiLock}
            errors={handleErrors('password')}
            classes="mt_16"
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
