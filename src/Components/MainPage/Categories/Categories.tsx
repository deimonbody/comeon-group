import React from 'react';
import { CategoriesTitle, CategoriesWrapper, CategoryName } from '../../Styled/Categories';
import { Line } from '../../Styled/Games';

export const Categories = () => {
  return (
    <CategoriesWrapper>
      <CategoriesTitle>
        Categories <Line />
      </CategoriesTitle>
      <CategoryName>All</CategoryName>
      <CategoryName>Video</CategoryName>
    </CategoriesWrapper>
  );
};
