import React, { useContext, useState, useEffect } from 'react';
// global context
import { GlobalContext } from '../../contexts/global';
// components
import { Modal } from '../../components';

const authentication = {
  SIGN_IN: 0,
  SIGN_UP: 1,
};

const AuthenticationModal = () => {
  const { shouldShowAuthenticationModal, showAuthenticationModal } =
    useContext(GlobalContext);
  const [authenticationType, setAuthenticationType] = useState(
    authentication.SIGN_IN,
  );

  useEffect(() => {
    if (!shouldShowAuthenticationModal) {
      setAuthenticationType(authentication.SIGN_IN);
    }
  }, [shouldShowAuthenticationModal]);

  const onAuthenticationSubmit = (event) => {
    event.preventDefault();
    // TODO: implementar a lógica de cadastro/login
  };

  return (
    <Modal
      visible={shouldShowAuthenticationModal}
      onClose={() => showAuthenticationModal(false)}
    >
      <div className="authentication">
        {authenticationType === authentication.SIGN_IN ? (
          <>
            <div className="authentication__title">
              <h2>
                Informe seu email <br /> e senha nos campos <br /> abaixo
              </h2>
            </div>

            <form
              onSubmit={onAuthenticationSubmit}
              className="authentication__form"
            >
              <input
                type="email"
                required
                placeholder="Digite seu email aqui"
              />
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

            <small>Não possui conta?</small>
            <button
              type="button"
              className="outlined no-border"
              onClick={() => setAuthenticationType(authentication.SIGN_UP)}
            >
              Cadastre-se agora
            </button>
          </>
        ) : (
          <>
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
                <input type="text" required placeholder="Digite seu nome" />
                <input
                  type="email"
                  required
                  placeholder="Digite sua email aqui"
                />
              </div>

              <div className="input-inline">
                <input type="password" placeholder="Digite uma senha" />
                <input type="password" placeholder="Confirme sua senha" />
              </div>

              <button type="submit" className="solid">
                Criar conta
              </button>
            </form>

            <small>Já possui conta?</small>
            <button
              type="button"
              className="outlined no-border"
              onClick={() => setAuthenticationType(authentication.SIGN_IN)}
            >
              Faça seu login
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export { AuthenticationModal };
