import React from 'react';
// icons
import { RiCloseLine } from 'react-icons/ri';

const Toast = ({ visible, onClose }) => {
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
