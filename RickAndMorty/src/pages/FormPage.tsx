import React, { useContext } from 'react';

import TitlePage from '../components/TitlePage/TitlePage';
import Form from '../components/Form/Form';
import CardsList from '../components/Form/Cards/CardsList';
import { ContextApp } from 'reducers/reducers';

const FormPage = () => {
  const { state } = useContext(ContextApp);

  return (
    <div className="form">
      <TitlePage>Form</TitlePage>
      <Form />
      {state.cardUser.length > 0 && <CardsList cardList={state.cardUser} />}
    </div>
  );
};

export default FormPage;
