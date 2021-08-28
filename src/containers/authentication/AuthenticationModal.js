import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
// global context
import { GlobalContext } from '../../contexts/global';
// components
import { Modal } from '../../components';
import SignIn from './SignIn';
import SignUp from './SignUp';
// validation
import { AuthValidation } from '../../validation';
// helpers
import { Authentication } from '../../helpers';

const authentication = {
  SIGN_IN: 0,
  SIGN_UP: 1,
};

const AuthenticationModal = () => {
  // context
  const {
    shouldShowAuthenticationModal,
    showAuthenticationModal,
    handleAuthenticatedUser,
    routeToRedirect,
    setRouteToRedirect,
  } = useContext(GlobalContext);

  // state
  const [authenticationType, setAuthenticationType] = useState(
    authentication.SIGN_IN,
  );
  const [authenticationErrors, setAuthenticationErrors] = useState(null);

  // router
  const history = useHistory();

  // side effects
  useEffect(() => {
    if (!shouldShowAuthenticationModal) {
      setAuthenticationType(authentication.SIGN_IN);
      setAuthenticationErrors(null);
    }
  }, [shouldShowAuthenticationModal]);

  // handlers
  const onAuthenticationSubmit = async (event, authenticationData) => {
    event.preventDefault();

    const requiredFields =
      authenticationType === authentication.SIGN_IN
        ? ['email', 'password']
        : ['name', 'email', 'password', 'confirmPassword'];

    const errors = AuthValidation.validate(
      authenticationData,
      requiredFields,
      authenticationType,
    );

    if (!errors) {
      // TODO: implementar envio do formulário
      setAuthenticationErrors(null);

      const authenticatedUser = await Authentication.signIn(authenticationData);

      if (!authenticatedUser) {
        // mostrar mensagem de errors
        // eslint-disable-next-line no-alert
        alert('Usuário ou senha incorreto');
      } else {
        // setar usuário no contexto
        handleAuthenticatedUser(authenticatedUser);
        showAuthenticationModal(false);

        if (routeToRedirect) {
          history.push(`/${routeToRedirect}`);
          setRouteToRedirect(null);
        }
      }
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
