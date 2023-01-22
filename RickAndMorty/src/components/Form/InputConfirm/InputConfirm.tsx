import React from 'react';
import { useFormContext } from 'react-hook-form';

import classes from './InputConfirm.module.scss';

const UserConfirm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classes.confirm_wrapper}>
      <div className={classes.input_checkbox}>
        <input
          type="checkbox"
          {...register('confirm', {
            required: 'Confirm the form data',
          })}
        />
        <span className={classes.form_item_title}>
          I consent to the processing of my personal data
        </span>
      </div>
      {errors.confirm && <span className="input_error">{errors.confirm.message as string}</span>}
    </div>
  );
};

export default UserConfirm;
