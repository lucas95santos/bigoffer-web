import React, { useEffect, useContext } from 'react';
// context
import { GlobalContext } from '../contexts/global';

const Notifications = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { changeAppState } = globalContext;

  useEffect(() => {
    changeAppState('global', 'READY');
  }, []);

  return (
    <section className="notifications">
      <div className="container">
        <h1>Notificações</h1>
      </div>
    </section>
  );
};

export { Notifications };
