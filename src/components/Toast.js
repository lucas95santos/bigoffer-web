/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// context
import { GlobalContext } from '../contexts/global';
// icons
import { RiCloseLine } from 'react-icons/ri';

const Toast = ({ visible, onClose }) => {
  // context
  const { changeAppState, appState } = useContext(GlobalContext);

  // state
  const [isOut, setIsOut] = useState(false);
  const [isIn, setIsIn] = useState(false);

  // route
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (
      appState.global !== 'LOADING' &&
      location.pathname !== '/notificacoes'
    ) {
      setTimeout(() => {
        setIsIn(true);
      }, 900);
    }
  }, []);

  // handlers
  const goToNotifications = () => {
    onClose();

    if (location.pathname !== '/notificacoes') {
      changeAppState('global', 'LOADING');
      history.push('/notificacoes');
    }
  };

  const handleClose = () => {
    setIsOut(true);

    setTimeout(() => {
      onClose();
      setIsOut(false);
      setIsIn(false);
    }, 250);
  };

  if (!visible || location.pathname === '/notificacoes') return null;

  return (
    <div className={`toast ${isOut ? 'toast-out' : isIn ? 'toast-in' : ''}`}>
      <div className="toast-container">
        <span>Você tem uma nova notificação!</span>
        <footer>
          <button
            className="outlined no-border"
            type="button"
            title="Ver a notificação agora"
            onClick={() => goToNotifications()}
          >
            Ver agora
          </button>
          <button
            className="outlined no-border"
            type="button"
            title="Ver a notificação depois"
            onClick={() => handleClose()}
          >
            Ver depois
          </button>
        </footer>
      </div>
      <button
        className="outlined no-border"
        type="button"
        title="Fechar"
        onClick={() => handleClose()}
      >
        <RiCloseLine />
      </button>
    </div>
  );
};

export { Toast };
