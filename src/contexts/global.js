import React, { createContext } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => (
  <Context.Provider value={{}}>{children}</Context.Provider>
);

export default ContextProvider;
