import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
  padding: 10px 35px;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.bold};
  cursor: pointer;
`;
