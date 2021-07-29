import React, { useContext } from 'react';
// global context
import { GlobalContext } from '../../contexts/global';
// components
import { Modal } from '../../components';

const AuthenticationModal = () => {
  const { shouldShowAuthenticationModal, showAuthenticationModal } =
    useContext(GlobalContext);

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
        <div className="authentication__title">
          <h2>
            Informe seu email <br /> e senha nos campos <br /> abaixo
          </h2>
        </div>

        <form
          onSubmit={onAuthenticationSubmit}
          className="authentication__form"
        >
          <input type="text" placeholder="Digite seu email aqui" />
          <input type="text" placeholder="Digite sua senha aqui" />

          <button type="submit" className="solid">
            Acessar
          </button>

          <small>Não possui conta?</small>

          <button type="button" className="outlined no-border">
            Cadastre-se agora
          </button>
        </form>
      </div>
    </Modal>
  );
};

export { AuthenticationModal };
