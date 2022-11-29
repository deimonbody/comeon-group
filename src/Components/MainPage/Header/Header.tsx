import React from 'react';
import { useAppSelector } from '../../../store/hooks';
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

export const Header = () => {
  const { user } = useAppSelector((store) => store.userReducer);
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
        <LogOutBtn>Log Out</LogOutBtn>
      </HeaderWrapper>
    </>
  );
};
