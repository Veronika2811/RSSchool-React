import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cardLabel from 'components/RickAndMorty/utils/cardLabel';

import { ROUTES } from 'constants/constants';
import { RootState } from 'store/store';

import classes from './CardDetails.module.scss';

const CardDetails = () => {
  const state = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE);
  const { id } = useParams();
  const card = state.characters.find((el) => el.id === +id!);

  const colorLabel = cardLabel(card?.status);

  return (
    <>
      <Link className={classes.btn_back} to={ROUTES.main}>
        Back
      </Link>
      <div className={classes.modal__content}>
        <img className={classes.modal__img} src={card?.image} alt={card?.name} />
        <div className={classes.modal__text}>
          <h3 className={classes.modal__name}>{card?.name}</h3>
          <p className={classes.card_field}>
            Gender: <span className={classes.card_value}>{card?.gender}</span>
          </p>
          <p className={classes.card_field}>
            Species: <span className={classes.card_value}>{card?.species}</span>
          </p>
          <p className={classes.card_field}>
            Location: <span className={classes.card_value}>{card?.location.name}</span>
          </p>
          <p className={classes.modal__label} style={{ backgroundColor: colorLabel }}>
            {card?.status}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
