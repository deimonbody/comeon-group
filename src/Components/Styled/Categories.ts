import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CategoriesTitle = styled.p`
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
export const CategoryName = styled.p<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? '#8edfff' : props.theme.colors.black)};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.4rem;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 10px;
  @media screen and (max-width: 992px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
