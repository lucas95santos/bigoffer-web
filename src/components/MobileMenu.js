/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// global context
import { GlobalContext } from '../contexts/global';
// icons
import { HiOutlineChevronLeft, HiOutlineCog } from 'react-icons/hi';
import { CgHome } from 'react-icons/cg';
import { FiBookmark, FiBell } from 'react-icons/fi';

const MobileMenu = ({ visible, onClose }) => {
  const globalContext = useContext(GlobalContext);
  const location = useLocation();

  const [isOut, setIsOut] = useState(false);

  const isRouteActive = useCallback(
    (route) => location.pathname === `/${route}`,
    [location],
  );

  const onAccessClick = () => {
    const { showAuthenticationModal } = globalContext;

    showAuthenticationModal(true);
  };

  const handleClose = () => {
    setIsOut(true);

    setTimeout(() => {
      onClose();
      setIsOut(false);
    }, 300);
  };

  if (visible) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
    return null;
  }

  return (
    <div className={`mobile-menu ${isOut ? 'mobile-menu-out' : ''}`}>
      <header className="mobile-menu__header">
        <button
          type="button"
          className="mobile-menu__back-container outlined no-border"
          onClick={handleClose}
        >
          <HiOutlineChevronLeft />
          <span>Voltar</span>
        </button>
      </header>

      <ul className="mobile-menu__content">
        <li
          className={`menu__item ${isRouteActive('') && 'active'}`}
          onClick={handleClose}
        >
          <Link to="/">
            <CgHome />
            Início
          </Link>
        </li>
        <li
          className={`menu__item ${isRouteActive('salvos') && 'active'}`}
          onClick={handleClose}
        >
          <Link to="/salvos">
            <FiBookmark />
            Itens salvos
          </Link>
        </li>
        <li
          className={`menu__item ${isRouteActive('notificacoes') && 'active'}`}
          onClick={handleClose}
        >
          <Link to="/notificacoes">
            <FiBell />
            Notificações
          </Link>
        </li>
        <li
          className={`menu__item ${isRouteActive('configuracoes') && 'active'}`}
          onClick={handleClose}
        >
          <Link to="/configuracoes">
            <HiOutlineCog />
            Configurações
          </Link>
        </li>
      </ul>

      <footer className="mobile-menu__footer">
        <button type="button" className="outlined" onClick={onAccessClick}>
          Acessar
        </button>
      </footer>
    </div>
  );
};

export { MobileMenu };
