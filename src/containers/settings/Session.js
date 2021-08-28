import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// global context
import { GlobalContext } from '../../contexts/global';
// helpers
import { Authentication } from '../../helpers';

const Session = ({ settingsTitle }) => {
  // context
  const { handleAuthenticatedUser } = useContext(GlobalContext);

  // router
  const history = useHistory();

  // state
  const [shouldShowSignOutButton, showSignOutButton] = useState(false);

  // handlers
  const onSessionEnd = useCallback(async () => {
    await Authentication.signOut();
    handleAuthenticatedUser();
    history.push('/');
  }, []);

  return (
    <div>
      <h2>{settingsTitle}</h2>

      <div className="session-area">
        <div className="sign-out">
          {shouldShowSignOutButton ? (
            <>
              <p>Clique no botão para encerrar</p>
              <button
                type="button"
                className="solid danger"
                onClick={onSessionEnd}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <p>Deseja encerrar sua sessão?</p>
              <button
                type="button"
                className="solid"
                onClick={() => showSignOutButton(true)}
              >
                Sim
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { Session };
