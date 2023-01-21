import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { ROUTES } from 'constants/constants';
import { ContextApp } from 'reducers/reducers';

import classes from './CardDetails.module.scss';

const CardDetails = () => {
  const { state } = useContext(ContextApp);
  const { id } = useParams();
  const card = state.characters?.find((el) => el.id === +id!);

  const colorLabel = card?.status;

  return card ? (
    <>
      <Link className="btn" to={ROUTES.main}>
        Back
      </Link>
      <div className={classes.modal__content}>
        <img className={classes.modal__img} src={card.image} alt={card.name} />
        <div className={classes.modal__text}>
          <h3 className={classes.modal__name}>{card.name}</h3>
          <p className={classes.card_field}>
            Gender: <span className={classes.card_value}>{card.gender}</span>
          </p>
          <p className={classes.card_field}>
            Species: <span className={classes.card_value}>{card.species}</span>
          </p>
          <p className={classes.card_field}>
            Location: <span className={classes.card_value}>{card.location.name}</span>
          </p>
          <p
            className={classes.modal__label}
            style={{
              backgroundColor:
                colorLabel === 'Dead' ? '#EC2D01' : colorLabel === 'Alive' ? '#76c076' : '#808080',
            }}
          >
            {card.status}
          </p>
        </div>
      </div>
    </>
  ) : (
    <h1>ниче нет</h1>
  );
};

export default CardDetails;
