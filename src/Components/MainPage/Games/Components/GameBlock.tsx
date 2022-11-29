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
import Game from '../../../../images/deadoralive.jpg';

export const GameBlock = () => {
  return (
    <GameBlockWrapper>
      <GameBlockImg>
        <img src={Game} alt="Game" />
      </GameBlockImg>
      <GamesBlockInfo>
        <GameName>Dead or Alive</GameName>
        <GameDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae provident veniam ipsa, esse
          dignissimos ea quidem odio est eligendi delectus ducimus, nemo quam inventore ratione, et
          accusantium temporibus nisi nam.
        </GameDescription>
        <GameBtn>Play</GameBtn>
      </GamesBlockInfo>
      <GameBlockLine />
    </GameBlockWrapper>
  );
};
