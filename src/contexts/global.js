import React, { createContext, useState, useCallback, useEffect } from 'react';
// helpers
import { Storage } from '../helpers';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // state
  const [shouldShowAuthenticationModal, showAuthenticationModal] =
    useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [routeToRedirect, setRouteToRedirect] = useState(null);
  const [appState, setAppState] = useState({});

  // side effects
  useEffect(() => {
    changeAppState('global', 'LOADING');
    const user = Storage.getItem('authenticated_user');

    if (user) {
      setAuthenticatedUser(user);
    }
  }, []);

  // handlers
  const handleAuthenticatedUser = useCallback((user) => {
    if (user) {
      Storage.setItem('authenticated_user', { ...user, token: user.id });
    }

    setAuthenticatedUser(user);
  }, []);

  const changeAppState = (domain, status) => {
    if (domain === 'global' && status === 'LOADING') {
      setAppState({
        global: 'LOADING',
      });
    } else {
      setAppState((oldState) => ({
        ...oldState,
        [domain]: status,
      }));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        shouldShowAuthenticationModal,
        showAuthenticationModal,
        authenticatedUser,
        handleAuthenticatedUser,
        routeToRedirect,
        setRouteToRedirect,
        appState,
        changeAppState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
