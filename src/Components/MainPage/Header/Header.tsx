import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  HeaderWrapper,
  HeaderUserBlock,
  HeaderUserImg,
  HeaderUserInfo,
  HeaderUserName,
  HeaderUserDescription,
  HeaderInputBlock,
  LogOutBtn,
  HeaderFirstLine,
} from '../../Styled/Header';
import Search from '../../../images/search.png';
import { userActions } from '../../../store/user';

export const Header = () => {
  const { user } = useAppSelector((store) => store.userReducer);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(userActions.setLoading());
    dispatch(userActions.logout(user.username as string));
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
            <input placeholder="Search Game" />
            <img src={Search} alt="search" />
          </HeaderInputBlock>
        </HeaderFirstLine>
        <LogOutBtn onClick={logoutHandler}>Log Out</LogOutBtn>
      </HeaderWrapper>
    </>
  );
};
