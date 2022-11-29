import { ICategory } from '../../common/interfaces';

export interface IState {
  isLoading: boolean;
  categories: ICategory[];
}
export enum CategoriesActions {
  SET_CATEGORY_LOADING = 'SET_CATEGORY_LOADING',
  SET_CATEGORIES = 'SET_CATEGORIES',
}
