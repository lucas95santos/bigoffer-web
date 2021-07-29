import React from 'react';
// components
import { Slider } from './Slider';
// icons
import { FiBookmark } from 'react-icons/fi';
// utils
import { moneyFormatter } from '../utils';

const Card = ({ item, small, next = false, rest }) => (
  <div className={`card ${small && 'small'}`} {...rest}>
    <div className="card__icon" title="Salvar item">
      <FiBookmark />
    </div>
    <span className="card__title">{item.title}</span>

    <div className="card__slider">
      <Slider images={item.images} />
    </div>

    <div className="card__info">
      <p>
        Lance mínimo:{' '}
        <span>&nbsp;{moneyFormatter.format(item.minimumPrice)}</span>
      </p>
      {next ? (
        <small>
          Disponível em: <span>&nbsp;3 dias</span>
        </small>
      ) : (
        <small>
          Tempo restante: <span>&nbsp;2 horas e 15 minutos</span>
        </small>
      )}
    </div>

    <button type="button" className="solid">
      Lance
    </button>
  </div>
);

export { Card };
