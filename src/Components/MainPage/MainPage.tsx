import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHES } from '../../common/enum';
import { useAuthorized } from '../../hooks';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Loader } from '../Loader/Loader';
import { GamesBlockWrapper } from '../Styled/Games';
import { Wrapper } from '../Styled/Wrapper';
import { Categories } from './Categories/Categories';
import { Games } from './Games/Games';
import { Header } from './Header/Header';
import { gamesActions } from '../../store/games';
import { categoriesActions } from '../../store/categories';
import { Game, GameImg, GameWrapperBlock } from '../Styled/GameBLock';
import ComeBack from '../../images/back.png';

export const MainPage = () => {
  const isAuthorized = useAuthorized();
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const gamesLoading = useAppSelector((store) => store.gamesReducer.isLoading);
  const categoriesLoading = useAppSelector((store) => store.categoriesReducer.isLoading);
  const launchGameRef = useRef<null | HTMLDivElement>(null);
  const [isGameStart, setIsGameStart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isAuthorized) {
      navigate(PATHES.LOGIN);
    } else {
      dispatch(gamesActions.setLoading());
      dispatch(gamesActions.setGames());
      dispatch(categoriesActions.setLoading());
      dispatch(categoriesActions.setCategories());
    }
  }, [isAuthorized]);
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
