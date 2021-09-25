import React, { useEffect, useContext, useState, useCallback } from 'react';
// context
import { GlobalContext } from '../contexts/global';
// icons
import {
  RiNotification2Fill,
  RiNotification2Line,
  RiNotificationOffLine,
  RiCloseLine,
} from 'react-icons/ri';
import { MdRestore } from 'react-icons/md';

const notifications = {
  UNREAD: {
    code: 0,
    title: 'Não lidas',
    icon: <RiNotification2Fill />,
  },
  READ: {
    code: 1,
    title: 'Lidas',
    icon: <RiNotification2Line />,
  },
  REMOVED: {
    code: 2,
    title: 'Removidas',
    icon: <RiNotificationOffLine />,
  },
};

const Notifications = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { changeAppState } = globalContext;

  // state
  const [currentNotification, setCurrentNotification] = useState(
    notifications.UNREAD.code,
  );

  // side effects
  useEffect(() => {
    changeAppState('global', 'READY');
  }, []);

  // renders
  const renderNotificationsMenu = useCallback(
    () => (
      <ul>
        {Object.keys(notifications).map((type) => (
          <li
            key={notifications[type].code}
            className={
              currentNotification === notifications[type].code ? 'active' : null
            }
            onClick={() => setCurrentNotification(notifications[type].code)}
          >
            {notifications[type].icon}
            {notifications[type].title}
          </li>
        ))}
      </ul>
    ),
    [currentNotification],
  );

  const renderNotificationsInfo = useCallback(() => {
    switch (currentNotification) {
      case notifications.REMOVED.code:
        return (
          <div className="notification">
            <div className="notification__content">
              <span className="removed">
                Leilão <strong>#29993</strong> começando em 15 minutos
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ex consequuntur, quod facilis officiis consectetur.
              </p>
            </div>
            <button
              className="outlined no-border"
              type="button"
              title="Restaurar notificação"
            >
              <MdRestore />
            </button>
          </div>
        );
      case notifications.READ.code:
        return (
          <div className="notification">
            <div className="notification__content">
              <span className="read">
                Leilão <strong>#29993</strong> começando em 15 minutos
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ex consequuntur, quod facilis officiis consectetur.
              </p>
            </div>
            <div className="notification__actions">
              <button
                className="outlined no-border"
                type="button"
                title="Marcar como não lida"
              >
                <RiNotification2Fill />
              </button>
              <button
                className="outlined no-border"
                type="button"
                title="Remover notificação"
              >
                <RiCloseLine />
              </button>
            </div>
          </div>
        );
      case notifications.UNREAD.code:
      default:
        return (
          <div className="notification">
            <div className="notification__content">
              <span>
                Leilão <strong>#29993</strong> começando em 15 minutos
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                ex consequuntur, quod facilis officiis consectetur.
              </p>
            </div>
            <div className="notification__actions">
              <button
                className="outlined no-border"
                type="button"
                title="Marcar como lida"
              >
                <RiNotification2Line />
              </button>
              <button
                className="outlined no-border"
                type="button"
                title="Remover notificação"
              >
                <RiCloseLine />
              </button>
            </div>
          </div>
        );
    }
  });

  return (
    <section className="notifications">
      <div className="container">
        <h1>Notificações</h1>

        <div className="notifications__content">
          <aside className="notifications__menu">
            {renderNotificationsMenu()}
          </aside>
          <main className="notifications__info transparent">
            {renderNotificationsInfo()}
          </main>
        </div>
      </div>
    </section>
  );
};

export { Notifications };
