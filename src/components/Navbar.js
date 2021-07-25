import React from 'react';
// icons
import { CgHome } from 'react-icons/cg';
import { FiBookmark, FiBell } from 'react-icons/fi';
import { HiOutlineCog } from 'react-icons/hi';
// import { FaUserAlt } from 'react-icons/fa'; -> Habilitar quando o usuário estiver logado
// assets
import logoImg from '../assets/logo.png';
// styles
import '../styles/navbar.scss';

const Navbar = () => (
  <header>
    <nav>
      <div className="container">
        <div className="navbar">
          <img src={logoImg} alt="Big Offer logo" />

          <ul className="navbar__menu">
            <li className="menu__item">
              <a href="/">
                <CgHome />
                Início
              </a>
            </li>
            <li className="menu__item">
              <a href="/">
                <FiBookmark />
                Itens salvos
              </a>
            </li>
            <li className="menu__item">
              <a href="/">
                <FiBell />
                Notificações
              </a>
            </li>
            <li className="menu__item">
              <a href="/">
                <HiOutlineCog />
                Configurações
              </a>
            </li>
            <li className="menu__item">
              <button type="button" className="outlined">
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
        </div>
      </div>
    </nav>
  </header>
);

export { Navbar };
