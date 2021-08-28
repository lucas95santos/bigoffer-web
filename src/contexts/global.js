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

  // side effects
  useEffect(() => {
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

  return (
    <GlobalContext.Provider
      value={{
        shouldShowAuthenticationModal,
        showAuthenticationModal,
        authenticatedUser,
        handleAuthenticatedUser,
        routeToRedirect,
        setRouteToRedirect,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
