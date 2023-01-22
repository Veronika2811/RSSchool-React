import React from 'react';

import IDataForm from 'components/Form/types/IDataForm';

import classes from './Card.module.scss';

const Card = ({ card }: { card: IDataForm }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__image} src={card.pathPhoto} />
      <div className={classes.card__description}>
        <p className={classes.card_field}>
          First Name: <span className={classes.card_value}>{card.name}</span>
        </p>
        <p className={classes.card_field}>
          Birthday: <span className={classes.card_value}>{card.birthday}</span>
        </p>
        <p className={classes.card_field}>
          Country: <span className={classes.card_value}>{card.country}</span>
        </p>
        <p className={classes.card_field}>
          Sex: <span className={classes.card_value}>{card.sex}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
