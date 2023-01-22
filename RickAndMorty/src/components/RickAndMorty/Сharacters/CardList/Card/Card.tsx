import React from 'react';
import { Link } from 'react-router-dom';

import CardDetails from './CardDetails/CardDetails';
import cardLabel from '../../../utils/cardLabel';

import ICharacter from '../../types/ICharacter';

import classes from './Card.module.scss';

const Card = ({ card }: { card: ICharacter }) => {
  const colorLabel = cardLabel(card.status);

  const created = new Date(card.created).getFullYear();

  return (
    <Link
      className={classes.card}
      key={card.id}
      to={`/characters/${card.id}`}
      onClick={() => <CardDetails />}
    >
      <p className={classes.card__label} style={{ backgroundColor: colorLabel }}>
        {card.status}
      </p>
      <img className={classes.card__image} src={card.image} alt={card.name} />
      <div className={classes.card__description}>
        <h3>{card.name}</h3>
        <p>
          Gender: <span className={classes.card_value}>{card.gender}</span>
        </p>
        <p>
          Species: <span className={classes.card_value}>{card.species}</span>
        </p>
        <p>
          Location: <span className={classes.card_value}>{card.location.name}</span>
        </p>
        <p>
          Year created: <span className={classes.card_value}>{created}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
