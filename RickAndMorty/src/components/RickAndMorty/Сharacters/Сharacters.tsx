import React, { useEffect, useState, useContext } from 'react';

import { ContextApp } from 'reducers/reducers';
import getData from '../utils/getDate/getDate';
import Preloader from '../../Preloader/Preloader';
import CardList from './CardList/CardList';

import classes from './Сharacters.module.scss';
import sortData from '../utils/sortData/sortData';

const Сharacters = () => {
  const { state, dispatch } = useContext(ContextApp);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData(state.currentPage, state.searchText)
      .then((res) => {
        const { info, results } = res.data;

        const sortedCards = sortData(results, state.sortingRule);

        dispatch({ type: 'UPDATE_СHARACTERS', data: sortedCards ? sortedCards : results });
        dispatch({ type: 'UPDATE_PAGE_INFO', data: info });

        setIsError(false);
        setIsLoading(false);
        return { info, results };
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [state.searchText, state.sortingRule, state.currentPage, dispatch]);

  return (
    <>
      {isLoading && <Preloader />}
      {!isError && <CardList cards={state.characters} />}
      {isError && <h3 className={classes.error_message}>Ничего не найдено</h3>}
    </>
  );
};

export default Сharacters;
