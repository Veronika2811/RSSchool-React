import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/UI/button/Button';
import { saveSearchQuery, goToFirstPage } from 'store/appManagementSlice';

import { RootState } from 'store/store';

import classes from './SearchBar.module.scss';

const SearchBar = () => {
  const searchQuery = useSelector((state: RootState) => state.APP_MANAGEMENT_SLICE.searchQuery);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const updateData = () => {
    const inputElement = ref.current;
    dispatch(saveSearchQuery((inputElement as unknown as HTMLInputElement).value));
    dispatch(goToFirstPage());
  };

  return (
    <div className={classes.search_form}>
      <input
        type="text"
        placeholder="Type you request"
        defaultValue={searchQuery}
        className="input"
        ref={ref}
        onKeyDown={(event) => {
          if (event.key == 'Enter') updateData();
        }}
      />
      <Button onClick={updateData}>Search</Button>
    </div>
  );
};

export default SearchBar;
