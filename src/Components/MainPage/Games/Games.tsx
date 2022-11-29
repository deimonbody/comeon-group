import React from 'react';
import { GamesTitle, GamesWrapper, Line } from '../../Styled/Games';
import { GameBlock } from './Components/GameBlock';

export const Games = () => {
  return (
    <GamesWrapper>
      <GamesTitle>
        Games
        <Line />
      </GamesTitle>
      <GameBlock />
      <GameBlock />
      <GameBlock />
    </GamesWrapper>
  );
};
