import React, { useEffect, useContext } from 'react';
// context
import { GlobalContext } from '../contexts/global';

const SavedItems = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { changeAppState } = globalContext;

  useEffect(() => {
    changeAppState('global', 'READY');
  }, []);

  return (
    <section className="saved-items">
      <div className="container">
        <h1>Itens salvos</h1>
      </div>
    </section>
  );
};

export { SavedItems };
