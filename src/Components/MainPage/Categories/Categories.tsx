import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import { CategoriesTitle, CategoriesWrapper, CategoryName } from '../../Styled/Categories';
import { Line } from '../../Styled/Games';

export const Categories = () => {
  const { categories } = useAppSelector((store) => store.categoriesReducer);
  return (
    <CategoriesWrapper>
      <CategoriesTitle>
        Categories <Line />
      </CategoriesTitle>
      {categories.map((category) => (
        <CategoryName key={category.id}>{category.name}</CategoryName>
      ))}
    </CategoriesWrapper>
  );
};
