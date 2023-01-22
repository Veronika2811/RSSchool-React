import React from 'react';

import Link from '../Link/Link';
import { ROUTES } from 'constants/constants';

import classes from './Navigate.module.scss';

const Navigate = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.navigation__list}>
        <li>
          <Link route={ROUTES.main} end routeName="Main" />
        </li>
        <li>
          <Link route={ROUTES.about} routeName="About Us" />
        </li>
        <li>
          <Link route={ROUTES.form} routeName="Form" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigate;
