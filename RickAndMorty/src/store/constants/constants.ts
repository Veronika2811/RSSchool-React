import TInitalState from '../types/TInitalState';

const INITIAL_STATE: TInitalState = {
  cardUsers: [],
  searchQuery: '',
  sortRule: '',
  characters: [],
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
  currentPage: 1,
  isLoading: false,
  noData: false,
};

export default INITIAL_STATE;
