import React, { useState, useCallback, useEffect, useContext } from 'react';
// context
import { GlobalContext } from '../contexts/global';
// components
import { BasicInfo, Security, Payment, Session } from '../containers/settings';
// icons
import {
  RiLockPasswordLine,
  RiProfileLine,
  RiAccountCircleLine,
} from 'react-icons/ri';
import { FiCreditCard } from 'react-icons/fi';

const settings = {
  BASIC_INFO: {
    code: 0,
    title: 'Informações básicas',
    icon: <RiProfileLine />,
  },
  SECURITY: {
    code: 1,
    title: 'Segurança',
    icon: <RiLockPasswordLine />,
  },
  PAYMENT: {
    code: 2,
    title: 'Opções de pagamento',
    icon: <FiCreditCard />,
  },
  SESSION: {
    code: 3,
    title: 'Sessão',
    icon: <RiAccountCircleLine />,
  },
};

const Settings = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { changeAppState } = globalContext;

  // state
  const [currentSetting, setCurrentSetting] = useState(
    settings.BASIC_INFO.code,
  );

  // side effects
  useEffect(() => {
    changeAppState('global', 'READY');
  }, []);

  // renders
  const renderSettingsMenu = useCallback(
    () => (
      <ul>
        {Object.keys(settings).map((type) => (
          <li
            key={settings[type].code}
            className={currentSetting === settings[type].code ? 'active' : null}
            onClick={() => setCurrentSetting(settings[type].code)}
          >
            {settings[type].icon}
            {settings[type].title}
          </li>
        ))}
      </ul>
    ),
    [currentSetting],
  );

  const renderSettingsInfo = useCallback(() => {
    switch (currentSetting) {
      case settings.SECURITY.code:
        return <Security settingsTitle={settings.SECURITY.title} />;
      case settings.PAYMENT.code:
        return <Payment settingsTitle={settings.PAYMENT.title} />;
      case settings.SESSION.code:
        return <Session settingsTitle={settings.SESSION.title} />;
      case settings.BASIC_INFO.code:
      default:
        return <BasicInfo settingsTitle={settings.BASIC_INFO.title} />;
    }
  }, [currentSetting]);

  return (
    <section className="settings">
      <div className="container">
        <h1>Configurações</h1>

        <div className="settings__content">
          <aside className="settings__menu">{renderSettingsMenu()}</aside>
          <main className="settings__info">{renderSettingsInfo()}</main>
        </div>
      </div>
    </section>
  );
};

export { Settings };
