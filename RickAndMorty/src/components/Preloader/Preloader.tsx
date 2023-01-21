import React from 'react';

import classes from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={classes.preloader__wrapper}>
      <div className={classes.preloader__inner}></div>
    </div>
  );
};

export default Preloader;
