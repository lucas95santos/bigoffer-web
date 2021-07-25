import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
// route wrapper
import Route from './Route';
// components
import { Navbar } from '../components';
// screens
import { Home } from '../screens';

const ScreenWrapper = ({ children }) => (
  <div className="screen-wrapper">{children}</div>
);

const Routes = () => (
  <>
    <Navbar />
    <ScreenWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ScreenWrapper>
  </>
);

export default Routes;
