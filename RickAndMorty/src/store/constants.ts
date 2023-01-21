import TInitalState from './types';

const INITIAL_STATE: TInitalState = {
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

export default INITIAL_STATE;
