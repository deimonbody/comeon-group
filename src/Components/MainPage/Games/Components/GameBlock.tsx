import React from 'react';
import {
  GameBlockWrapper,
  GameBlockImg,
  GamesBlockInfo,
  GameName,
  GameDescription,
  GameBtn,
  GameBlockLine,
} from '../../../Styled/Games';
import { IGame } from '../../../../common/interfaces';

interface IProps {
  game: IGame;
}

export const GameBlock: React.FC<IProps> = ({ game }) => {
  return (
    <GameBlockWrapper>
      <GameBlockImg>
        <img src={game.icon} alt="Game" />
      </GameBlockImg>
      <GamesBlockInfo>
        <GameName>{game.name}</GameName>
        <GameDescription>{game.description}</GameDescription>
        <GameBtn>Play</GameBtn>
      </GamesBlockInfo>
      <GameBlockLine />
    </GameBlockWrapper>
  );
};
