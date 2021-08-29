import React, { useEffect, useState, useContext } from 'react';
import Loading from 'react-loading';
// context
import { GlobalContext } from '../contexts/global';
// components
import { Card, Slider, CategoryBar } from '../components';
// containers
import { AuthenticationModal } from '../containers';

const fetchItems = async (route) => {
  const response = await fetch(`http://localhost:3333/${route}`);
  const data = await response.json();

  return data;
};

const Home = () => {
  // context
  const globalContext = useContext(GlobalContext);
  const { changeAppState } = globalContext;

  // state
  const [openedAuctions, setOpenedAuctions] = useState([]);
  const [nextAuctions, setNextAuctions] = useState([]);

  useEffect(() => {
    getAuctions();
    changeAppState('global', 'READY');
  }, []);

  const getAuctions = async () => {
    const data = await fetchItems('auctions');
    if (data) {
      setNextAuctions(data);
      setOpenedAuctions(data);
    }
  };

  return (
    <>
      <CategoryBar />
      {!openedAuctions.length && !nextAuctions.length ? (
        <div className="loading-container">
          <Loading type="bubbles" color="#1565c0" height={72} width={72} />
        </div>
      ) : (
        <>
          <section className="available-items">
            <div className="container">
              <h1>Disponíveis agora</h1>
              {openedAuctions.length > 0 && (
                <div className="items">
                  <Slider type="item">
                    {openedAuctions.map((auction, index) => (
                      <div
                        data-index={index}
                        className="item-wrapper"
                        key={auction.id}
                      >
                        <Card item={auction} />
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </section>
          <section className="next-items">
            <div className="container">
              <h1>Próximos leilões</h1>
              <div className="items">
                {nextAuctions.map((auction) => (
                  <Card small next item={auction} key={auction.id} />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      <AuthenticationModal />
    </>
  );
};

export { Home };
