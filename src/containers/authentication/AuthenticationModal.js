import React, { useContext, useState, useEffect } from 'react';
// global context
import { GlobalContext } from '../../contexts/global';
// components
import { Modal } from '../../components';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
      {authenticationType === authentication.SIGN_IN ? (
        <SignIn
          onAuthenticationSubmit={onAuthenticationSubmit}
          changeAuthenticationTo={setAuthenticationType}
          authentication={authentication}
        />
      ) : (
        <SignUp
          onAuthenticationSubmit={onAuthenticationSubmit}
          changeAuthenticationTo={setAuthenticationType}
          authentication={authentication}
        />
      )}
    </Modal>
  );
};

export { AuthenticationModal };
