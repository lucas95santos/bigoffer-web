import React, { useState, useCallback } from 'react';

const SignUp = React.memo(
  ({ onAuthenticationSubmit, changeAuthenticationTo, authentication }) => {
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
          onSubmit={onAuthenticationSubmit}
          className="authentication__form"
        >
          <div className="input-inline">
            <input
              type="text"
              required
              placeholder="Digite seu nome"
              value={signUpData.name}
              onChange={(event) =>
                handleInputChange('name', event.target.value)
              }
            />
            <input
              type="email"
              required
              placeholder="Digite sua email aqui"
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
              value={signUpData.password}
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
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
