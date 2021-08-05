import React, { useContext, useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// global context
import { GlobalContext } from '../contexts/global';
// components
import { MobileMenu } from './MobileMenu';
// icons
import { CgHome } from 'react-icons/cg';
import { FiBookmark, FiBell, FiMenu } from 'react-icons/fi';
import { HiOutlineCog } from 'react-icons/hi';
// import { FaUserAlt } from 'react-icons/fa'; -> Habilitar quando o usuário estiver logado
// assets
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const globalContext = useContext(GlobalContext);
  const location = useLocation();

  const [shouldShowMobileMenu, showMobileMenu] = useState(false);

  const onAccessClick = () => {
    const { showAuthenticationModal } = globalContext;

    showAuthenticationModal(true);
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
            <img src={logoImg} alt="Big Offer logo" />

            <ul className="navbar__menu">
              <li className={`menu__item ${isRouteActive('') && 'active'}`}>
                <Link to="/">
                  <CgHome />
                  Início
                </Link>
              </li>
              <li
                className={`menu__item ${isRouteActive('salvos') && 'active'}`}
              >
                <Link to="/salvos">
                  <FiBookmark />
                  Itens salvos
                </Link>
              </li>
              <li
                className={`menu__item ${
                  isRouteActive('notificacoes') && 'active'
                }`}
              >
                <Link to="/notificacoes">
                  <FiBell />
                  Notificações
                </Link>
              </li>
              <li
                className={`menu__item ${
                  isRouteActive('configuracoes') && 'active'
                }`}
              >
                <Link to="/configuracoes">
                  <HiOutlineCog />
                  Configurações
                </Link>
              </li>
              <li className="menu__item">
                <button
                  type="button"
                  className="outlined"
                  onClick={onAccessClick}
                >
                  Acessar
                </button>
              </li>
              {/* Habilitar quando o usuário estiver logado */}
              {/* <li className="menu__item">
                <div className="user-area">
                  <div className="user-area__avatar">
                    <FaUserAlt />
                  </div>
                  <p className="user-area__fullname">John Doe</p>
                </div>
              </li> */}
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
      </nav>
    </header>
  );
};

export { Navbar };
