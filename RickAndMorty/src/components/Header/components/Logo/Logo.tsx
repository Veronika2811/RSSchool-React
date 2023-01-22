import React from 'react';

import classes from './Logo.module.scss';

const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return <img className={classes.logo} src={src} alt={alt} />;
};

export default Logo;
