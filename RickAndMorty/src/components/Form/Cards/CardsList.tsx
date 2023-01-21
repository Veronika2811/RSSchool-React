import React from 'react';

import Card from './Card/Card';

import IDataForm from '../types/IDataForm';

import classes from './CardsList.module.scss';

const CardsList = ({ cardList }: { cardList: IDataForm[] }) => {
  return (
    <div className={classes.card_list}>
      {cardList.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
};

export default CardsList;
