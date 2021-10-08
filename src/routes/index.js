import React, { useContext, useState } from 'react';
import { Switch } from 'react-router-dom';
// route wrapper
import Route from './Route';
// context
import { GlobalContext } from '../contexts/global';
// components
import { NavBar, LoadingWrapper, Toast } from '../components';
// screens
import { Home, SavedItems, Notifications, Settings } from '../screens';

const ScreenWrapper = ({ children }) => (
  <main className="screen-wrapper">{children}</main>
);

const Routes = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { appState } = globalContext;

  // fake state
  const [shouldShowToast, showToast] = useState(false);

  // useEffect(() => {
  //   showToast(appState.global !== 'LOADING');
  // }, [appState]);

  return (
    <LoadingWrapper visible={appState.global === 'LOADING'}>
      <NavBar />
      <Toast visible={shouldShowToast} onClose={showToast} />
      <ScreenWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/salvos" component={SavedItems} privateRoute />
          <Route path="/notificacoes" component={Notifications} privateRoute />
          <Route path="/configuracoes" component={Settings} privateRoute />
        </Switch>
      </ScreenWrapper>
    </LoadingWrapper>
  );
};

export default Routes;
