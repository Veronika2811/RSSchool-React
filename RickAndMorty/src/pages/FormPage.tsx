import React from 'react';
import { useSelector } from 'react-redux';

import TitlePage from '../components/TitlePage/TitlePage';
import Form from '../components/Form/Form';
import CardsList from '../components/Form/Cards/CardsList';

import { RootState } from 'store/store';

const FormPage = () => {
  const cardUsers = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE.cardUsers);

  return (
    <div className="form">
      <TitlePage>Form</TitlePage>
      <Form />
      {cardUsers.length > 0 && <CardsList cardList={cardUsers} />}
    </div>
  );
};

export default FormPage;
