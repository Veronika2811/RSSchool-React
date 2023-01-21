import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormElement from '../FormElement/FormElement';

import classes from './SwitchSex.module.scss';

const SwitchSex = () => {
  const { register } = useFormContext();

  return (
    <FormElement title="Male / Female">
      <label className={classes.switch}>
        <input className={classes.switch__input} type="checkbox" {...register('sex')} />
        <span className={`${classes.switch__input_slider} ${classes.switch__input_round}`}></span>
      </label>
    </FormElement>
  );
};

export default SwitchSex;
