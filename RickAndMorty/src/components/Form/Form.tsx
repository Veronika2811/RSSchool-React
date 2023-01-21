import React, { useContext } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import InputName from './InputName/InputName';
import InputBirthday from './InputBirthday/InputBirthday';
import SelectCountry from './SelectCountry/SelectCountry';
import SwitchSex from './SwitchSex/SwitchSex';
import InputPhoto from './InputPhoto/InputPhoto';
import InputConfirm from './InputConfirm/InputConfirm';
import { ContextApp } from 'reducers/reducers';

import IDataForm from './types/IDataForm';

import classes from './Form.module.scss';

const Form = () => {
  const methods = useForm<IDataForm>();
  const { dispatch } = useContext(ContextApp);

  const onSubmit = (data: IDataForm) => {
    data.sex = data.sex ? 'female' : 'male';

    const URLPhoto = URL.createObjectURL(methods.getValues('pathPhoto')[0] as unknown as File);
    data.pathPhoto = URLPhoto;

    dispatch({ type: 'SAVE_FORM_CARD', data });

    resetForm();
  };

  const resetForm = () => {
    methods.reset({
      name: '',
      birthday: '',
      country: '',
      sex: false,
      pathPhoto: '',
      confirm: false,
    });
  };

  return (
    <FormProvider {...methods}>
      <form className={classes.user_form} onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={classes.user_form__title}>Create Card User</h2>
        <InputName />
        <InputBirthday />
        <SelectCountry />
        <SwitchSex />
        <InputPhoto />
        <InputConfirm />
        <input type="submit" value="Create card" className={classes.input_submit} />
      </form>
    </FormProvider>
  );
};

export default Form;
