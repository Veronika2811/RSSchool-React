import React, { useContext, ChangeEvent } from 'react';

import { ContextApp } from 'reducers/reducers';

const SelectSorting = () => {
  const { state, dispatch } = useContext(ContextApp);

  const handleOnClickSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'UPDATE_CARDS_SORTING', data: e.target.value });
  };

  return (
    <select className="input" value={state.sortingRule} onChange={(e) => handleOnClickSorting(e)}>
      <option value="">Sorting</option>
      <option value="by-name">By name</option>
      <option value="by-status">By status</option>
      <option value="by-created">By created</option>
    </select>
  );
};

export default SelectSorting;
