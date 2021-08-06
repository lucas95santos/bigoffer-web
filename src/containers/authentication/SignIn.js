import React from 'react';

const SignIn = ({
  onAuthenticationSubmit,
  changeAuthenticationTo,
  authentication,
}) => (
  <div className="authentication">
    <div className="authentication__title">
      <h2>
        Informe seu email <br /> e senha nos campos <br /> abaixo
      </h2>
    </div>

    <form onSubmit={onAuthenticationSubmit} className="authentication__form">
      <input type="email" required placeholder="Digite seu email aqui" />
      <input
        type="password"
        required
        placeholder="Digite sua senha aqui"
        className="mt_16"
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

export default SignIn;
