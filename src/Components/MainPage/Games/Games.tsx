import { IGame } from '@route/common/interfaces';
import { GamesWrapper, GamesTitle, Line } from '@route/Components/Styled';
import { gamesActions } from '@route/store/games';
import { useAppDispatch, useAppSelector } from '@route/store/hooks';
import React, { useEffect, useState } from 'react';
import { GameBlock } from './Components/GameBlock';

interface IProps {
  setGameStartHandler: () => void;
}
export const Games: React.FC<IProps> = ({ setGameStartHandler }) => {
  const { games, searchGameWord } = useAppSelector((store) => store.gamesReducer);
  const { activeCategoryId } = useAppSelector((store) => store.categoriesReducer);
  const [filteredGames, setFilteredGames] = useState<IGame[]>(games);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (activeCategoryId !== null && activeCategoryId !== 0) {
      let result = [];
      if (searchGameWord?.length) {
        result = filteredGames.filter((game) => game.categoryIds.includes(activeCategoryId));
      } else {
        result = games.filter((game) => game.categoryIds.includes(activeCategoryId));
      }
      setFilteredGames(result);
    }
    if (activeCategoryId === 0) {
      setFilteredGames(games);
      dispatch(gamesActions.searchGame(''));
    }
  }, [activeCategoryId]);

  useEffect(() => {
    if (searchGameWord?.length) {
      const result = filteredGames.filter((game) => game.name.includes(searchGameWord));
      setFilteredGames(result);
    }
  }, [searchGameWord]);
  return (
    <GamesWrapper>
      <GamesTitle>
        Games
        <Line />
      </GamesTitle>
      {filteredGames.length ? (
        filteredGames.map((game) => (
          <GameBlock setGameStartHandler={setGameStartHandler} game={game} key={game.code} />
        ))
      ) : (
        <p>Nothing was founded...</p>
      )}
    </GamesWrapper>
  );
};
