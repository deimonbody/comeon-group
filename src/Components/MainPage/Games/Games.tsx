import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { GamesTitle, GamesWrapper, Line } from '../../Styled/Games';
import { GameBlock } from './Components/GameBlock';

export const Games = () => {
  const { games } = useAppSelector((store) => store.gamesReducer);
  return (
    <GamesWrapper>
      <GamesTitle>
        Games
        <Line />
      </GamesTitle>
      {games.map((game) => (
        <GameBlock game={game} key={game.code} />
      ))}
    </GamesWrapper>
  );
};
