import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// routes
import Routes from './routes';
// global context provider
import GlobalProvider from './contexts/global';

const App = () => (
  <GlobalProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </GlobalProvider>
);

export default App;
