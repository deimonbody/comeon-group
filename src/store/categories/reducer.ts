import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IState } from './common';
import * as categoriesActions from './actions';

export const categoriesReducer = (builder: ActionReducerMapBuilder<IState>) => {
  builder
    .addCase(categoriesActions.setLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(categoriesActions.setCategories.fulfilled, (state, actions) => {
      state.categories = actions.payload;
      state.isLoading = false;
    })
    .addCase(categoriesActions.setCategories.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(categoriesActions.setActiveCategory, (state, actions) => {
      state.activeCategoryId = actions.payload.categoryId;
    });
};
