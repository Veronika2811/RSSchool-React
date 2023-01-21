import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormElement from '../FormElement/FormElement';

const InputName = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormElement title="First Name">
      <input
        type="text"
        placeholder="Enter your name"
        className="input"
        {...register('name', {
          required: 'Enter your name',
          minLength: {
            value: 5,
            message: 'Min length is 5 letters.',
          },
          maxLength: {
            value: 15,
            message: 'Max length is 15 letters.',
          },
          pattern: {
            value: /^[А-Яа-яA-Za-z]+$/,
            message: 'The field should contain only letters.',
          },
        })}
      />
      {errors.name && <span className="input_error">{errors.name.message as string}</span>}
    </FormElement>
  );
};

export default InputName;
