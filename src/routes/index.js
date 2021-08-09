import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';
// route wrapper
import Route from './Route';
// components
import { NavBar } from '../components';
// screens
import { Home, SavedItems, Notifications, Settings } from '../screens';

const ScreenWrapper = ({ children }) => (
  <main className="screen-wrapper">{children}</main>
);

const Routes = () => (
  <>
    <NavBar />
    <ScreenWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/salvos" component={SavedItems} />
        <Route path="/notificacoes" component={Notifications} />
        <Route path="/configuracoes" component={Settings} />
      </Switch>
    </ScreenWrapper>
  </>
);

export default Routes;
