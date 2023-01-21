import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ContextApp, reducer } from 'reducers/reducers';
import INITIAL_STATE from 'store/constants';
import Header from 'components/Header/Header';
import MainPage from './pages/MainPage';
import CardDetails from 'components/RickAndMorty/Сharacters/CardList/Card/CardDetails/CardDetails';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import NotFound from './pages/NotFound';
import { ROUTES } from 'constants/constants';

import classes from './App.module.scss';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div className={classes.App}>
      <Header />
      <ContextApp.Provider value={{ dispatch, state }}>
        <Routes>
          <Route path={ROUTES.main} element={<MainPage />} />
          <Route path="/characters/:id" element={<CardDetails />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.form} element={<FormPage />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Routes>
      </ContextApp.Provider>
    </div>
  );
}

export default App;
