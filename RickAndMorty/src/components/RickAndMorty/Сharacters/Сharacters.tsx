import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Preloader from '../../Preloader/Preloader';
import CardList from './CardList/CardList';
import classes from './Сharacters.module.scss';
import getData from '../utils/getDate';
import sortData from '../utils/sortData';
import {
  updateСharacterСards,
  updatePageInfo,
  saveStateLoadingApp,
  saveAppDataError,
} from 'store/appManagementSlice';

import { RootState } from 'store/store';

const Сharacters = () => {
  const state = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveStateLoadingApp(true));

    getData(state.currentPage, state.searchQuery)
      .then((res) => {
        const { info, results } = res.data;

        const sortedCards = state.sortRule ? sortData(results, state.sortRule) : results;

        dispatch(updateСharacterСards(sortedCards));
        dispatch(updatePageInfo(info));
        dispatch(saveAppDataError(false));
      })
      .catch(() => {
        dispatch(saveAppDataError(true));
      });
    dispatch(saveStateLoadingApp(false));
  }, [state.currentPage, state.searchQuery, state.sortRule]);

  return (
    <>
      {state.isLoading && <Preloader />}
      {!state.noData && <CardList cards={state.characters} />}
      {state.noData && <h3 className={classes.error_message}>Ничего не найдено</h3>}
    </>
  );
};

export default Сharacters;
