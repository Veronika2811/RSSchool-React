import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormElement from '../FormElement/FormElement';

const InputBirthday = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormElement title="Birthday">
      <input
        type="date"
        className="input"
        {...register('birthday', {
          required: 'Enter your birthday',
          validate: (value) =>
            new Date(value).getFullYear() < new Date().getFullYear() - 10 || 'Invalid Birthday.',
        })}
      />
      {errors.birthday && <span className="input_error">{errors.birthday.message as string}</span>}
    </FormElement>
  );
};

export default InputBirthday;
