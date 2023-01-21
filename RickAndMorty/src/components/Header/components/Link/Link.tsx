import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Link.module.scss';

const Link = ({ route, end, routeName }: { route: string; end?: boolean; routeName: string }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${classes.navigation__item}` + (isActive ? ` ${classes.active}` : '')
      }
      to={route}
      end={end}
    >
      {routeName}
    </NavLink>
  );
};

export default Link;
