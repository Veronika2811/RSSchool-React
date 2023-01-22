import ICharacter from 'components/RickAndMorty/Сharacters/types/ICharacter';

const sortData = (cards: ICharacter[], sortingRule: string) => {
  if (sortingRule === 'by-name') {
    return cards.sort((a, b) => a.name.localeCompare(b.name) - b.name.localeCompare(a.name));
  }
  if (sortingRule === 'by-status') {
    return cards.sort(
      (a, b) => a.status.localeCompare(b.status) - b.status.localeCompare(a.status)
    );
  }
  if (sortingRule === 'by-created') {
    return cards.sort(
      (a, b) => new Date(a.created).getFullYear() - new Date(b.created).getFullYear()
    );
  }
};

export default sortData;
