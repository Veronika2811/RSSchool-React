import React from 'react';

import TitlePage from '../components/TitlePage/TitlePage';
import SearchBar from '../components/RickAndMorty/SearchBar/SearchBar';
import Сharacters from '../components/RickAndMorty/Сharacters/Сharacters';
import SortingBar from 'components/RickAndMorty/SelectSorting/SelectSorting';

const MainPage = () => {
  return (
    <main className="main">
      <TitlePage>The Rick and Morty API</TitlePage>
      <div className="main-wrapper">
        <div className="left-side">
          <SearchBar />
          <SortingBar />
        </div>
        <div className="cards-wrapper">
          <Сharacters />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
