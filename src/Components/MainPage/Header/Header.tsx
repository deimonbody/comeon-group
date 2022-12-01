import {
  HeaderFirstLine,
  HeaderInputBlock,
  HeaderUserBlock,
  HeaderUserDescription,
  HeaderUserImg,
  HeaderUserInfo,
  HeaderUserName,
  HeaderWrapper,
} from '@route/Components/Styled';
import { LogOutBtn } from '@route/Components/Styled/Header';
import { gamesActions } from '@route/store/games';
import { useAppSelector, useAppDispatch } from '@route/store/hooks';
import { userActions } from '@route/store/user';
import React, { useState } from 'react';
import Search from '../../../images/search.png';

export const Header = () => {
  const { user } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();
  const [inpValue, setInpValue] = useState('');
  const logoutHandler = () => {
    dispatch(userActions.setLoading());
    dispatch(userActions.logout(user.username as string));
  };
  const searchHandler = () => {
    dispatch(gamesActions.searchGame(inpValue));
    setInpValue('');
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderFirstLine>
          <HeaderUserBlock>
            <HeaderUserImg>
              <img src={user.avatar as string} alt="User Avatar" />
            </HeaderUserImg>
            <HeaderUserInfo>
              <HeaderUserName>{user.name}</HeaderUserName>
              <HeaderUserDescription>{user.event}</HeaderUserDescription>
            </HeaderUserInfo>
          </HeaderUserBlock>
          <HeaderInputBlock>
            <input
              value={inpValue}
              placeholder="Search Game"
              onChange={(e) => setInpValue(e.target.value)}
            />
            <img src={Search} alt="search" onClick={searchHandler} />
          </HeaderInputBlock>
        </HeaderFirstLine>
        <LogOutBtn onClick={logoutHandler}>Log Out</LogOutBtn>
      </HeaderWrapper>
    </>
  );
};
