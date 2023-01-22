import React, { FunctionComponent, ButtonHTMLAttributes } from 'react';

import classes from './Button.module.scss';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
