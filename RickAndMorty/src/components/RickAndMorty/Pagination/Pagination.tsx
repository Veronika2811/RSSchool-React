import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/UI/button/Button';
import { goToNextPage, goToPrevPage } from 'store/appManagementSlice';

import { RootState } from 'store/store';

import classes from './Pagination.module.scss';

const Pagination = () => {
  const state = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE);
  const dispatch = useDispatch();

  return (
    <div className={classes.pagination_wrapper}>
      <div className={classes.pagination}>
        <Button disabled={state.info.prev ? false : true} onClick={() => dispatch(goToPrevPage())}>
          Prev
        </Button>
        <span className={classes.pagination_current_page}>{state.currentPage}</span>
        <Button disabled={state.info.next ? false : true} onClick={() => dispatch(goToNextPage())}>
          Next
        </Button>
      </div>
      <span>Общее количество страниц: {state.info.pages}</span>
    </div>
  );
};

export default Pagination;
