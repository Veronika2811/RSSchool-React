import React, { FunctionComponent, InputHTMLAttributes } from 'react';

import classes from './Button.module.scss';

const Input: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  return (
    <input className={classes.input} {...props}>
      {children}
    </input>
  );
};

export default Input;
