import React, { useContext, useState, useEffect, useCallback } from 'react';
// global context
import { GlobalContext } from '../../contexts/global';
// components
import { Modal } from '../../components';
import SignIn from './SignIn';
import SignUp from './SignUp';
// validation
import { AuthValidation } from '../../validation';

const authentication = {
  SIGN_IN: 0,
  SIGN_UP: 1,
};

const AuthenticationModal = () => {
  // context
  const { shouldShowAuthenticationModal, showAuthenticationModal } =
    useContext(GlobalContext);

  // state
  const [authenticationType, setAuthenticationType] = useState(
    authentication.SIGN_IN,
  );
  const [authenticationErrors, setAuthenticationErrors] = useState(null);

  // side effects
  useEffect(() => {
    if (!shouldShowAuthenticationModal) {
      setAuthenticationType(authentication.SIGN_IN);
    }
  }, [shouldShowAuthenticationModal]);

  // handlers
  const onAuthenticationSubmit = (event, authenticationData) => {
    event.preventDefault();

    const requiredFields =
      authenticationType === authentication.SIGN_IN
        ? ['email', 'password']
        : ['name', 'email', 'password', 'confirmPassword'];

    const errors = AuthValidation.validate(authenticationData, requiredFields);

    if (!errors) {
      // TODO: implementar envio do formulário
      setAuthenticationErrors(null);
    } else {
      setAuthenticationErrors(errors);
    }
  };

  const changeAuthenticationTo = useCallback((type) => {
    setAuthenticationErrors(null);
    setAuthenticationType(type);
  }, []);

  return (
    <Modal
      visible={shouldShowAuthenticationModal}
      onClose={() => showAuthenticationModal(false)}
    >
      {authenticationType === authentication.SIGN_IN ? (
        <SignIn
          onAuthenticationSubmit={onAuthenticationSubmit}
          changeAuthenticationTo={changeAuthenticationTo}
          authentication={authentication}
          errors={authenticationErrors}
        />
      ) : (
        <SignUp
          onAuthenticationSubmit={onAuthenticationSubmit}
          changeAuthenticationTo={changeAuthenticationTo}
          authentication={authentication}
          errors={authenticationErrors}
        />
      )}
    </Modal>
  );
};

export { AuthenticationModal };
