import React from 'react';

const SignUp = ({
  onAuthenticationSubmit,
  changeAuthenticationTo,
  authentication,
}) => (
  <div className="authentication">
    <div className="authentication__title">
      <h2>
        Preencha os campos abaixo
        <br /> com os seus dados
        <br /> para criar sua conta
      </h2>
    </div>

    <form onSubmit={onAuthenticationSubmit} className="authentication__form">
      <div className="input-inline">
        <input type="text" required placeholder="Digite seu nome" />
        <input type="email" required placeholder="Digite sua email aqui" />
      </div>

      <div className="input-inline">
        <input type="password" placeholder="Digite uma senha" />
        <input type="password" placeholder="Confirme sua senha" />
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

export default SignUp;
