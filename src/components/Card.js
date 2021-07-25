import React from 'react';
// components
import { Slider } from './Slider';
// icons
import { FiBookmark } from 'react-icons/fi';
// assets
import fakeItemImg from '../assets/fake-item.png';
// styles
import '../styles/card.scss';

const images = [
  {
    url: fakeItemImg,
  },
  {
    url: fakeItemImg,
  },
  {
    url: fakeItemImg,
  },
  {
    url: fakeItemImg,
  },
  {
    url: fakeItemImg,
  },
];

const Card = () => (
  <div className="card">
    <div className="card__icon" title="Salvar item">
      <FiBookmark />
    </div>
    <span className="card__title">Titulo</span>

    <div className="card__slider">
      <Slider images={images} />
    </div>

    <div className="card__info">
      <p>
        Lance mínimo: <span>&nbsp;R$ 250,00</span>
      </p>
      <small>
        Tempo restante: <span>&nbsp;2 horas e 15 minutos</span>
      </small>
    </div>

    <button type="button" className="solid">
      Lance
    </button>
  </div>
);

export { Card };
