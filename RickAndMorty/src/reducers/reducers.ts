import { createContext, Dispatch } from 'react';

import IDataForm from 'components/Form/types/IDataForm';
import ICharacter from 'components/RickAndMorty/Сharacters/types/ICharacter';

export type TInitalState = {
  searchText: string;
  sortingRule: string;

  cardUser: IDataForm[];
  characters: ICharacter[] | null;
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  currentPage: number;
};

export const INITIAL_STATE: TInitalState = {
  searchText: '',
  sortingRule: '',

  cardUser: [],
  characters: null,
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
  currentPage: 1,
};

export type Action =
  | { type: 'SEARCH_BY_CARDS'; data: string }
  | { type: 'UPDATE_CARDS_SORTING'; data: string }
  | { type: 'UPDATE_СHARACTERS'; data: ICharacter[] }
  | {
      type: 'UPDATE_PAGE_INFO';
      data: { count: number; next: string | null; pages: number; prev: string | null };
    }
  | { type: 'SAVE_FORM_CARD'; data: IDataForm }
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'TO_FIRST_PAGE' };

export const ContextApp = createContext<{
  state: TInitalState;
  dispatch: Dispatch<Action>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export const formCardUserReducer = (state: IDataForm[], action: Action) => {
  switch (action.type) {
    case 'SAVE_FORM_CARD':
      return state && [...state, action.data];
    default:
      return state;
  }
};
export const serchValueReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'SEARCH_BY_CARDS':
      return action.data;
    default:
      return state;
  }
};
export const setCharactersReducer = (state: ICharacter[] | null, action: Action) => {
  switch (action.type) {
    case 'UPDATE_СHARACTERS':
      return action.data;
    default:
      return state;
  }
};
export const sortingCharactersReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'UPDATE_CARDS_SORTING':
      return action.data;
    default:
      return state;
  }
};

export const updatePageReducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'TO_FIRST_PAGE':
      return 1;
    default:
      return state;
  }
};
export const updatePageNumberReducer = (
  state: { count: number; next: string | null; pages: number; prev: string | null },
  action: Action
) => {
  switch (action.type) {
    case 'UPDATE_PAGE_INFO':
      return action.data;
    default:
      return state;
  }
};

export const reducer = (
  { searchText, sortingRule, cardUser, characters, info, currentPage }: TInitalState,
  action: Action
) => ({
  searchText: serchValueReducer(searchText, action),
  sortingRule: sortingCharactersReducer(sortingRule, action),

  cardUser: formCardUserReducer(cardUser, action),
  characters: setCharactersReducer(characters, action),
  info: updatePageNumberReducer(info, action),
  currentPage: updatePageReducer(currentPage, action),
});
