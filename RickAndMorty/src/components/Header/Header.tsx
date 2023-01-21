import React from 'react';

import Navigate from './components/Navigate/Navigate';
import Logo from './components/Logo/Logo';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo src="/assets/rick-and-morty.png" alt="Rick and Morty" />
      <Navigate />
    </header>
  );
};

export default Header;
