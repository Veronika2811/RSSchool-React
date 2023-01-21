import axios from 'axios';

import { BASE_URL } from '../../../../constants/constants';

const getData = async (pageNumber: number, query: string) => {
  const url = `${BASE_URL}?page=${pageNumber}&name=${query}`;

  return await axios.get(url);
};

export default getData;
