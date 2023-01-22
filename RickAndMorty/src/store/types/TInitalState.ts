import IDataForm from 'components/Form/types/IDataForm';
import ICharacter from 'components/RickAndMorty/Сharacters/types/ICharacter';

type TInitalState = {
  cardUsers: IDataForm[];
  searchQuery: string;
  sortRule: string;

  characters: ICharacter[] | [];
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  currentPage: number;
  isLoading: boolean;
  noData: boolean;
};

export default TInitalState;
