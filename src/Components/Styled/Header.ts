import styled from 'styled-components';
import { Button } from './Button';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderUserBlock = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
  }
`;
export const HeaderUserImg = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;
export const HeaderUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
`;
export const HeaderUserName = styled.p`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.2rem;
  margin-bottom: 5px;
`;
export const HeaderUserDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 0.9rem;
`;
export const HeaderInputBlock = styled.div`
  flex-basis: 220px;
  position: relative;
  @media screen and (max-width: 576px) {
    flex-basis: auto;
  }
  input {
    outline: none;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.grayColor};
    box-sizing: border-box;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 10px 30px 10px 15px;
    font-family: ${(props) => props.theme.fonts.medium};
    font-size: 0.9rem;
  }

  img {
    width: 18px;
    height: 18px;
    object-fit: contain;
    position: absolute;
    top: 10px;
    right: 5px;
  }
`;
export const LogOutBtn = styled(Button)`
  align-self: flex-start;
  @media screen and (max-width: 576px) {
    margin-left: auto;
    margin-right: auto;
    // font-size: 0.8rem;
    padding: 5px 25px;
  }
`;
export const HeaderFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
