import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHES } from '../../common/enum';
import { useAuthorized } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Loader } from '../Loader/Loader';
import { GamesBlockWrapper } from '../Styled/Games';
import { Wrapper } from '../Styled/Wrapper';
import { Categories } from './Categories/Categories';
import { Games } from './Games/Games';
import { Header } from './Header/Header';
import { gamesActions } from '../../store/games';
import { categoriesActions } from '../../store/categories';

export const MainPage = () => {
  const isAuthorized = useAuthorized();
  const userLoading = useAppSelector((store) => store.userReducer.isLoading);
  const gamesLoading = useAppSelector((store) => store.gamesReducer.isLoading);
  const categoriesLoading = useAppSelector((store) => store.categoriesReducer.isLoading);
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
  if (userLoading || gamesLoading || categoriesLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Header />
      <GamesBlockWrapper>
        <Games />
        <Categories />
      </GamesBlockWrapper>
    </Wrapper>
  );
};
