import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// helpers
import { Storage } from '../helpers';

const RouteWrapper = ({
  component: Component,
  privateRoute,
  path,
  ...rest
}) => {
  const authenticatedUser = Storage.getItem('authenticated_user');

  if (!authenticatedUser && privateRoute) {
    return <Redirect to="/" />;
  }

  return <Route path={path} component={Component} {...rest} />;
};

export default RouteWrapper;
