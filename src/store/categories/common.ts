import { ICategory } from '@route/common/interfaces';

export interface IState {
  isLoading: boolean;
  categories: ICategory[];
  activeCategoryId: number;
}
export enum CategoriesActions {
  SET_CATEGORY_LOADING = 'SET_CATEGORY_LOADING',
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY',
}
