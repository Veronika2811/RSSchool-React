import React, { useContext } from 'react';

import { ContextApp } from 'reducers/reducers';

import classes from './Pagination.module.scss';

const Pagination = () => {
  const { state, dispatch } = useContext(ContextApp);

  return (
    <div className={classes.pagination_wrapper}>
      <div className={classes.pagination}>
        <button
          disabled={state.info.prev ? false : true}
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
          className="btn"
        >
          Prev
        </button>
        <span className={classes.pagination_current_page}>{state.currentPage}</span>
        <button
          disabled={state.info.next ? false : true}
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
          className="btn"
        >
          Next
        </button>
      </div>
      <span>Общее количество страниц: {state.info.pages}</span>
    </div>
  );
};

export default Pagination;
