import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [shouldShowAuthenticationModal, showAuthenticationModal] =
    useState(false);

  return (
    <GlobalContext.Provider
      value={{ shouldShowAuthenticationModal, showAuthenticationModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
