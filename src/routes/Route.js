import React from 'react';
import { Route } from 'react-router-dom';

// TODO: implementar lógica de autenticação para rotas privadas
const RouteWrapper = ({ component: Component, path, ...rest }) => (
  <Route path={path} component={Component} {...rest} />
);

export default RouteWrapper;
