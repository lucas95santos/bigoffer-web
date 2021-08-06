import React, { useContext, useState, useEffect } from 'react';
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
  const { shouldShowAuthenticationModal, showAuthenticationModal } =
    useContext(GlobalContext);
  const [authenticationType, setAuthenticationType] = useState(
    authentication.SIGN_IN,
  );
  const [signInErrors, setSignInErrors] = useState(null);
  const [signUpErrors, setSignUpErrors] = useState(null);

  useEffect(() => {
    if (!shouldShowAuthenticationModal) {
      setAuthenticationType(authentication.SIGN_IN);
    }
  }, [shouldShowAuthenticationModal]);

  const onAuthenticationSubmit = (event, authenticationData) => {
    event.preventDefault();

    if (authenticationType === authentication.SIGN_IN) {
      const errors = AuthValidation.signIn(authenticationData);

      if (!errors) {
        // TODO: implementar envio do formulário
        setSignInErrors(null);
      } else {
        setSignInErrors(errors);
      }
    } else {
      const errors = AuthValidation.signUp(authenticationData);

      if (!errors) {
        // TODO: implementar envio do formulário
        setSignUpErrors(null);
      } else {
        setSignUpErrors(errors);
      }
    }
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
          errors={signInErrors}
        />
      ) : (
        <SignUp
          onAuthenticationSubmit={onAuthenticationSubmit}
          changeAuthenticationTo={setAuthenticationType}
          authentication={authentication}
          errors={signUpErrors}
        />
      )}
    </Modal>
  );
};

export { AuthenticationModal };
