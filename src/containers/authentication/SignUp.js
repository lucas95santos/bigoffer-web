import React, { useState, useCallback } from 'react';

const SignUp = React.memo(
  ({
    onAuthenticationSubmit,
    changeAuthenticationTo,
    authentication,
    errors,
  }) => {
    const [signUpData, setSignUpData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleInputChange = useCallback((field, value) => {
      setSignUpData((oldSignUpData) => ({
        ...oldSignUpData,
        [field]: value,
      }));
    }, []);

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
            <input
              type="text"
              placeholder="Digite seu nome"
              className={`${errors?.includes('name') && 'input-error'}`}
              value={signUpData.name}
              onChange={(event) =>
                handleInputChange('name', event.target.value)
              }
            />
            <input
              type="email"
              placeholder="Digite sua email aqui"
              className={`${errors?.includes('email') && 'input-error'}`}
              value={signUpData.email}
              onChange={(event) =>
                handleInputChange('email', event.target.value)
              }
            />
          </div>

          <div className="input-inline">
            <input
              type="password"
              placeholder="Digite uma senha"
              className={`${errors?.includes('password') && 'input-error'}`}
              value={signUpData.password}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              className={`${
                errors?.includes('confirmPassword') && 'input-error'
              }`}
              value={signUpData.confirmPassword}
              onChange={(event) =>
                handleInputChange('confirmPassword', event.target.value)
              }
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
