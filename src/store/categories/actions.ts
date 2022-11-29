import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ICategory } from '../../common/interfaces';
import { loadCategoriesAPI } from '../../helper/api.helper';
import { CategoriesActions } from './common';

const setCategories = createAsyncThunk(
  CategoriesActions.SET_CATEGORIES,
  async (): Promise<ICategory[]> => {
    try {
      const result = await loadCategoriesAPI();
      return result;
    } catch (err) {
      throw new Error(err as string);
    }
  }
);
const setLoading = createAction(CategoriesActions.SET_CATEGORY_LOADING);
const setActiveCategory = createAction(
  CategoriesActions.SET_ACTIVE_CATEGORY,
  (categoryId: number) => {
    return {
      payload: {
        categoryId,
      },
    };
  }
);
export { setLoading, setCategories, setActiveCategory };
