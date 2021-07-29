import React, { useEffect, useState } from 'react';
import Loading from 'react-loading';
// components
import { Card, Slider, Modal } from '../components';
// styles
import '../styles/home.scss';

const fetchItems = async (route) => {
  const response = await fetch(`http://localhost:3333/${route}`);
  const data = await response.json();

  return data;
};

const Home = () => {
  const [openedAuctions, setOpenedAuctions] = useState([]);
  const [nextAuctions, setNextAuctions] = useState([]);
  const [shouldShowModal, showModal] = useState(false);

  useEffect(() => {
    getAuctions();
  }, []);

  const getAuctions = async () => {
    const data = await fetchItems('auctions');
    if (data) {
      setNextAuctions(data);
      setOpenedAuctions(data);
    }
  };

  const handleModalClick = () => {
    showModal(true);
  };

  return (
    <>
      {!openedAuctions.length && !nextAuctions.length ? (
        <div className="loading-container">
          <Loading type="bubbles" color="#1565c0" height={72} width={72} />
        </div>
      ) : (
        <>
          <section className="available-items">
            <div className="container">
              <h1>Disponíveis agora</h1>
              <button onClick={handleModalClick} type="button">
                Modal
              </button>
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
      <Modal visible={shouldShowModal} onClose={() => showModal(false)} />
    </>
  );
};

export { Home };
