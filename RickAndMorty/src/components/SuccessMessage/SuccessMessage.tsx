import React from 'react';

import classes from './SuccessMessage.module.scss';

export const SuccessMessage = ({ text }: { text: string }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modal__overlay}></div>
      <div className={classes.modal__window}>
        <p className={classes.modal__information}>{text}</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
