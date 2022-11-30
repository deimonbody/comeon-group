import styled from 'styled-components';

interface IShowGame {
  isShow: boolean;
}
export const Game = styled.div<IShowGame>`
  width: 100%;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
`;
export const GameWrapperBlock = styled.div<IShowGame>`
  display: flex;
  flex-direction: column;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
`;
export const GameImg = styled.div<IShowGame>`
  width: 40px;
  cursor: pointer;
  height: 40px;
  margin: 20px 0;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  img {
    width: 100%;
    object-fit: contain;
  }
`;
