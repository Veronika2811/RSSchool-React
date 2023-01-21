import IDataForm from 'components/Form/types/IDataForm';
import ICharacter from 'components/RickAndMorty/Сharacters/types/ICharacter';

type TInitalState = {
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

export default TInitalState;
