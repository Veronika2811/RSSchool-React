import React, { ReactNode } from 'react';

import classes from '../Form.module.scss';

type ChildrenProps = {
  title: string;
  children: ReactNode;
};

const FormElement: React.FC<ChildrenProps> = ({ children, ...props }) => {
  return (
    <div className={classes.user_form__item}>
      <p className={classes.user_form__item_title}>{props.title}</p>
      {children}
    </div>
  );
};

export default FormElement;
