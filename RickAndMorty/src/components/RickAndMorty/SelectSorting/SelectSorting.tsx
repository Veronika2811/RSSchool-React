import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { saveSortingRule } from 'store/appManagementSlice';

import { RootState } from 'store/store';

const SelectSorting = () => {
  const sortRule = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE.sortRule);
  const dispatch = useDispatch();

  const handleOnClickSorting = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(saveSortingRule(e.target.value));
  };

  return (
    <select className="input" value={sortRule} onChange={(e) => handleOnClickSorting(e)}>
      <option value="">Sorting</option>
      <option value="by-name">By name</option>
      <option value="by-status">By status</option>
      <option value="by-created">By created</option>
    </select>
  );
};

export default SelectSorting;
