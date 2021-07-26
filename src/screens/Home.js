import React, { useEffect, useState } from 'react';
// components
import { Card, Slider } from '../components';
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

  return (
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
  );
};

export { Home };
