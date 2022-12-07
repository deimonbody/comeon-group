import { categoriesActions } from '@route/store/categories';
import { gamesActions } from '@route/store/games';
import { useAppDispatch, useAppSelector } from '@route/store/hooks';
import React, { useEffect, useRef, useState } from 'react';

import { Loader } from '@route/Components/Loader/Loader';
import {
  Game,
  GameImg,
  GamesBlockWrapper,
  GameWrapperBlock,
  Wrapper,
} from '@route/Components/Styled';
import ComeBack from '../../images/back.png';
import { Header } from './Header/Header';
import { Categories } from './Categories/Categories';
import { Games } from './Games/Games';

export const MainPage = () => {
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const gamesLoading = useAppSelector((store) => store.gamesReducer.isLoading);
  const categoriesLoading = useAppSelector((store) => store.categoriesReducer.isLoading);
  const launchGameRef = useRef<null | HTMLDivElement>(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(gamesActions.setLoading());
    dispatch(gamesActions.setGames());
    dispatch(categoriesActions.setLoading());
    dispatch(categoriesActions.setCategories());
  }, []);
  const setGameStartHandler = () => setIsGameStart(true);
  const setGameStoptHandler = () => {
    launchGameRef!.current!.innerHTML = '';
    setIsGameStart(false);
  };
  if (userLoading || gamesLoading || categoriesLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Header />
      <GamesBlockWrapper>
        {!isGameStart && (
          <>
            <Games setGameStartHandler={setGameStartHandler} />
            <Categories />
          </>
        )}
      </GamesBlockWrapper>
      <GameWrapperBlock isShow={isGameStart}>
        <GameImg isShow={isGameStart} onClick={setGameStoptHandler}>
          <img src={ComeBack} alt="back" />
        </GameImg>
        <Game id="game-launch" isShow={isGameStart} ref={launchGameRef} />
      </GameWrapperBlock>
    </Wrapper>
  );
};
