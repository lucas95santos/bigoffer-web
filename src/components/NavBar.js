import React, { useContext, useCallback, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
// global context
import { GlobalContext } from '../contexts/global';
// components
import { MobileMenu } from './MobileMenu';
// import { CategoryBar } from './CategoryBar';
// icons
import { CgHome } from 'react-icons/cg';
import { FiBookmark, FiBell, FiMenu } from 'react-icons/fi';
import { HiOutlineCog } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
// assets
import logoImg from '../assets/logo.png';

const NavBar = () => {
  // context
  const {
    showAuthenticationModal,
    authenticatedUser,
    setRouteToRedirect,
    changeAppState,
  } = useContext(GlobalContext);

  // state
  const [shouldShowMobileMenu, showMobileMenu] = useState(false);

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
  };

  const isRouteActive = useCallback(
    (route) => location.pathname === `/${route}`,
    [location],
  );

  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar">
            <Link to="/" title="Início">
              <img src={logoImg} alt="Big Offer logo" />
            </Link>

            <ul className="navbar__menu">
              <li className="menu__item">
                <button
                  type="button"
                  className={`menu-button ${isRouteActive('') && 'active'}`}
                  onClick={() => goToRoute('')}
                >
                  <CgHome />
                  Início
                </button>
              </li>
              <li className="menu__item">
                <button
                  type="button"
                  className={`menu-button ${
                    isRouteActive('salvos') && 'active'
                  }`}
                  onClick={() => goToRoute('salvos')}
                >
                  <FiBookmark />
                  Itens salvos
                </button>
              </li>
              <li className="menu__item">
                <button
                  type="button"
                  className={`menu-button ${
                    isRouteActive('notificacoes') && 'active'
                  }`}
                  onClick={() => goToRoute('notificacoes')}
                >
                  <FiBell />
                  Notificações
                </button>
              </li>
              <li className="menu__item">
                <button
                  type="button"
                  className={`menu-button ${
                    isRouteActive('configuracoes') && 'active'
                  }`}
                  onClick={() => goToRoute('configuracoes')}
                >
                  <HiOutlineCog />
                  Configurações
                </button>
              </li>
              {authenticatedUser ? (
                <li className="menu__item">
                  <div className="user-area">
                    <div className="user-area__avatar">
                      <FaUserAlt />
                    </div>
                    <p className="user-area__fullname">
                      {authenticatedUser.name}
                    </p>
                  </div>
                </li>
              ) : (
                <li className="menu__item">
                  <button
                    type="button"
                    className="outlined"
                    onClick={onAccessClick}
                  >
                    Acessar
                  </button>
                </li>
              )}
            </ul>

            <div className="navbar__menu--collapse">
              <FiMenu onClick={() => showMobileMenu(true)} />

              <MobileMenu
                visible={shouldShowMobileMenu}
                onClose={() => showMobileMenu(false)}
              />
            </div>
          </div>
        </div>
        {/* <CategoryBar /> */}
      </nav>
    </header>
  );
};

export { NavBar };
