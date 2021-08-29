import React, { useCallback, useContext, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// global context
import { GlobalContext } from '../contexts/global';
// icons
import { HiOutlineChevronLeft, HiOutlineCog } from 'react-icons/hi';
import { CgHome } from 'react-icons/cg';
import { FiBookmark, FiBell } from 'react-icons/fi';

const MobileMenu = ({ visible, onClose }) => {
  // context
  const globalContext = useContext(GlobalContext);
  const {
    authenticatedUser,
    changeAppState,
    setRouteToRedirect,
    showAuthenticationModal,
  } = globalContext;

  // state
  const [isOut, setIsOut] = useState(false);

  // router
  const location = useLocation();
  const history = useHistory();

  // handlers
  const onAccessClick = () => {
    showAuthenticationModal(true);
  };

  const goToRoute = (route) => {
    if (authenticatedUser) {
      if (location.pathname !== `/${route}`) {
        changeAppState('global', 'LOADING');
        history.push(`/${route}`);
      }
    } else {
      setRouteToRedirect(route);
      showAuthenticationModal(true);
    }

    handleClose();
  };

  const isRouteActive = useCallback(
    (route) => location.pathname === `/${route}`,
    [location],
  );

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
          onClick={() => goToRoute('')}
        >
          <CgHome />
          Início
        </li>
        <li
          className={`menu__item ${isRouteActive('salvos') && 'active'}`}
          onClick={() => goToRoute('salvos')}
        >
          <FiBookmark />
          Itens salvos
        </li>
        <li
          className={`menu__item ${isRouteActive('notificacoes') && 'active'}`}
          onClick={() => goToRoute('notificacoes')}
        >
          <FiBell />
          Notificações
        </li>
        <li
          className={`menu__item ${isRouteActive('configuracoes') && 'active'}`}
          onClick={() => goToRoute('configuracoes')}
        >
          <HiOutlineCog />
          Configurações
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
