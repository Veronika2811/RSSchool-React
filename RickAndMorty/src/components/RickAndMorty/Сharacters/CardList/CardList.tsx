import React from 'react';

import Card from './Card/Card';
import Pagination from 'components/RickAndMorty/Pagination/Pagination';

import ICharacter from '../types/ICharacter';

import classes from './CardList.module.scss';

const CardList = ({ cards }: { cards: ICharacter[] | null }) => {
  return (
    <>
      <div className={classes.card_list}>
        {cards?.map((card: ICharacter) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default CardList;
