import React, { useState, ChangeEvent, useContext } from 'react';

import { ContextApp } from 'reducers/reducers';

import classes from './SearchBar.module.scss';

const SearchBar = () => {
  const { state, dispatch } = useContext(ContextApp);
  const [value, setValue] = useState('');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    setValue(currentValue);
  };

  const updateData = () => {
    dispatch({ type: 'SEARCH_BY_CARDS', data: value });
    dispatch({ type: 'TO_FIRST_PAGE' });
  };

  return (
    <div className={classes.search_form}>
      <input
        type="text"
        placeholder="Type you request"
        defaultValue={state.searchText}
        className={classes.input}
        onChange={handleOnChange}
        onKeyDown={(event) => {
          if (event.key == 'Enter') updateData();
        }}
      />
      <button className="btn" onClick={updateData}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
