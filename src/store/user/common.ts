import { IUser } from '../../common/interfaces';

export interface IState {
  isLoading: boolean;
  user: IUser;
}
export enum UserActions {
  SET_USER = 'SET_USER',
  SET_USER_LOADING = 'SET_USER_LOADING',
}
