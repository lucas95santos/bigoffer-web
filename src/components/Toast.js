import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// context
import { GlobalContext } from '../contexts/global';
// icons
import { RiCloseLine } from 'react-icons/ri';

const Toast = ({ visible, onClose }) => {
  // context
  const { changeAppState } = useContext(GlobalContext);
  // route
  const history = useHistory();

  // handlers
  const goToNotifications = () => {
    onClose();
    changeAppState('global', 'LOADING');
    history.push('/notificacoes');
  };

  if (!visible) return null;

  return (
    <div className="toast">
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
            onClick={() => onClose()}
          >
            Ver depois
          </button>
        </footer>
      </div>
      <button
        className="outlined no-border"
        type="button"
        title="Fechar"
        onClick={() => onClose()}
      >
        <RiCloseLine />
      </button>
    </div>
  );
};

export { Toast };
