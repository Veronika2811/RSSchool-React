import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CardDetails from './CardDetails/CardDetails';

import ICharacter from '../../types/ICharacter';

import classes from './Card.module.scss';

const Card = ({ card }: { card: ICharacter }) => {
  const [openCard, setOpenCard] = useState(false);
  const colorLabel =
    card.status === 'Dead' ? '#EC2D01' : card.status === 'Alive' ? '#76c076' : '#808080';

  const created = new Date(card.created).getFullYear();

  return (
    <Link
      className={classes.card}
      key={card.id}
      to={`/characters/${card.id}`}
      onClick={() => setOpenCard(true)}
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
      {openCard && <CardDetails />}
    </Link>
  );
};

export default Card;
