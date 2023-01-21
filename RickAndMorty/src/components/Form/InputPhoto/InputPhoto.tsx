import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormElement from '../FormElement/FormElement';

import classes from './InputPhoto.module.scss';

const InputPhoto = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <FormElement title="Add photo profile">
      <input
        type="file"
        id="file"
        className={classes.file__input}
        {...register('pathPhoto', {
          required: 'Upload your photo',
          validate: (value) => {
            if (typeof value !== 'string') {
              return (
                value[0].type === 'image/jpeg' ||
                value[0].type === 'image/png' ||
                'Upload your photo'
              );
            }
          },
        })}
        accept="image/png, image/jpeg"
      />
      <label htmlFor="file" className={classes.file__label}>
        <span className={classes.file__button}>Select file</span>
      </label>
      <span className={classes.file__name}>
        {watch('pathPhoto') && watch('pathPhoto')[0]?.name}
      </span>
      {errors.pathPhoto && (
        <span className="input_error">{errors.pathPhoto.message as string}</span>
      )}
    </FormElement>
  );
};

export default InputPhoto;
