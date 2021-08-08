import React, { useState, useCallback } from 'react';
// errors
import AuthErrors from '../../errors/AuthErrors';
// components
import { CustomInput as Input } from '../../components';
// icons
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

const SignUp = React.memo(
  ({
    onAuthenticationSubmit,
    changeAuthenticationTo,
    authentication,
    errors,
  }) => {
    // state
    const [signUpData, setSignUpData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // handlers
    const handleInputChange = useCallback((field, value) => {
      setSignUpData((oldSignUpData) => ({
        ...oldSignUpData,
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
            Preencha os campos abaixo
            <br /> com os seus dados
            <br /> para criar sua conta
          </h2>
        </div>

        <form
          onSubmit={(event) => onAuthenticationSubmit(event, signUpData)}
          className="authentication__form"
        >
          <div className="input-inline">
            <Input
              type="text"
              placeholder="Nome"
              value={signUpData.name}
              onTextChange={(event) =>
                handleInputChange('name', event.target.value)
              }
              icon={FiUser}
              errors={handleErrors('name')}
            />
            <Input
              type="text"
              placeholder="E-mail"
              value={signUpData.email}
              onTextChange={(event) =>
                handleInputChange('email', event.target.value)
              }
              icon={FiMail}
              errors={handleErrors('email')}
            />
          </div>

          <div className="input-inline">
            <Input
              type="password"
              placeholder="Senha"
              value={signUpData.password}
              onTextChange={(event) =>
                handleInputChange('password', event.target.value)
              }
              icon={FiLock}
              errors={handleErrors('password')}
            />
            <Input
              type="password"
              placeholder="Confirmar senha"
              value={signUpData.confirmPassword}
              onTextChange={(event) =>
                handleInputChange('confirmPassword', event.target.value)
              }
              icon={FiLock}
              errors={handleErrors('confirmPassword')}
            />
          </div>

          <button type="submit" className="solid">
            Criar conta
          </button>
        </form>

        <div className="authentication__footer">
          <small>Já possui conta?</small>
          <button
            type="button"
            className="outlined no-border"
            onClick={() => changeAuthenticationTo(authentication.SIGN_IN)}
          >
            Faça seu login
          </button>
        </div>
      </div>
    );
  },
);

export default SignUp;
