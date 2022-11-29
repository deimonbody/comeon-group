import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHES } from '../../common/enum';
import { useAuthorized } from '../../hooks';
import { useAppSelector } from '../../store/hooks';
import { Loader } from '../Loader/Loader';
import { GamesBlockWrapper } from '../Styled/Games';
import { Wrapper } from '../Styled/Wrapper';
import { Categories } from './Categories/Categories';
import { Games } from './Games/Games';
import { Header } from './Header/Header';

export const MainPage = () => {
  const isAuthorized = useAuthorized();
  const { isLoading } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthorized) {
      navigate(PATHES.LOGIN);
    }
  }, [isAuthorized]);
  if (isLoading) {
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
