import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { CategoriesTitle, CategoriesWrapper, CategoryName } from '../../Styled/Categories';
import { Line } from '../../Styled/Games';
import { categoriesActions } from '../../../store/categories';

export const Categories = () => {
  const { categories } = useAppSelector((store) => store.categoriesReducer);
  const dispatch = useAppDispatch();
  const setCategoryHandler = (id: number) => {
    dispatch(categoriesActions.setActiveCategory(id));
  };
  return (
    <CategoriesWrapper>
      <CategoriesTitle>
        Categories <Line />
      </CategoriesTitle>
      {categories.map((category) => (
        <CategoryName onClick={() => setCategoryHandler(category.id)} key={category.id}>
          {category.name}
        </CategoryName>
      ))}
    </CategoriesWrapper>
  );
};
