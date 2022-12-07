import React from 'react';
import { CategoriesTitle, CategoriesWrapper, CategoryName, Line } from '@route/Components/Styled';

import { useAppSelector, useAppDispatch } from '@route/store/hooks';
import { categoriesActions } from '@route/store/categories';

export const Categories = () => {
  const { categories, activeCategoryId } = useAppSelector((store) => store.categoriesReducer);
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
        <CategoryName
          isActive={activeCategoryId === category.id}
          onClick={() => setCategoryHandler(category.id)}
          key={category.id}
        >
          {category.name}
        </CategoryName>
      ))}
    </CategoriesWrapper>
  );
};
