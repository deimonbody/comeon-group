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
  setGameStartHandler: () => void;
}
declare global {
  interface Window {
    comeon: any;
  }
}
export const GameBlock: React.FC<IProps> = ({ game, setGameStartHandler }) => {
  const startGameHanlder = () => {
    setGameStartHandler();
    window.comeon.game.launch(game.code);
  };
  return (
    <GameBlockWrapper>
      <GameBlockImg>
        <img src={game.icon} alt="Game" />
      </GameBlockImg>
      <GamesBlockInfo>
        <GameName>{game.name}</GameName>
        <GameDescription>{game.description}</GameDescription>
        <GameBtn onClick={startGameHanlder}>Play</GameBtn>
      </GamesBlockInfo>
      <GameBlockLine />
    </GameBlockWrapper>
  );
};
