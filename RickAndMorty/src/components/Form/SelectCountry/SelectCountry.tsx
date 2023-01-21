import React from 'react';
import { useFormContext } from 'react-hook-form';

import FormElement from '../FormElement/FormElement';

enum Countries {
  Belarus = 'Belarus',
  Ukraine = 'Ukraine',
  Georgia = 'Georgia',
  Poland = 'Poland',
}

const SelectCountry = () => {
  const countriesOptions: string[] = Object.values(Countries);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormElement title="Country of Residence">
      <select
        className="input"
        {...register('country', {
          required: 'Select your country',
        })}
      >
        <option value="">Select your country</option>
        {countriesOptions.map((el: string, index: number) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </select>
      {errors.country && <span className="input_error">{errors.country.message as string}</span>}
    </FormElement>
  );
};

export default SelectCountry;
