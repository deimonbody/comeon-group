import styled from 'styled-components';
import { Button } from './Button';

export const GamesTitle = styled.div`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.bold};
  margin-bottom: 30px;
  position: relative;
  @media screen and (max-width: 992px) {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
export const Line = styled.span`
  display: block;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayColor};
`;
export const GamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GamesBlockWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-column-gap: 40px;
  margin-top: 50px;
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr 150px;
    grid-column-gap: 20px;
  }
`;
export const GameBlockWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 30px;
`;
export const GameBlockImg = styled.div`
  flex-basis: 200px;
  margin-right: 30px;
  flex-grow: 0;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const GamesBlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 576px) {
    overflow: hidden;
  }
`;
export const GameName = styled.p`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    font-size: 1rem;
  }
`;

export const GameDescription = styled.div`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 1rem;
  flex-grow: 1;
  @media screen and (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 576px) {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const GameBtn = styled(Button)`
  align-self: flex-end;
  margin: 0;
  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
    padding: 5px 25px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    align-self: flex-start;
  }
`;
export const GameBlockLine = styled(Line)`
  bottom: -20px;
`;
