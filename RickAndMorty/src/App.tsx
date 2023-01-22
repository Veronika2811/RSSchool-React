import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'components/Header/Header';
import MainPage from './pages/MainPage';
import CardDetails from 'components/RickAndMorty/Сharacters/CardList/Card/CardDetails/CardDetails';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import NotFound from './pages/NotFound';
import { ROUTES } from 'constants/constants';
import { store } from 'store/store';

function App() {
  return (
    <div className="app">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path={ROUTES.main} element={<MainPage />} />
          <Route path={ROUTES.character} element={<CardDetails />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.form} element={<FormPage />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
