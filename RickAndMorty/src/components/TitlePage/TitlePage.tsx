import React, { ReactNode } from 'react';

import classes from './TitlePage.module.scss';

const TitlePage = ({ children }: { children: ReactNode }) => {
  return <h1 className={classes.title}>{children}</h1>;
};

export default TitlePage;
