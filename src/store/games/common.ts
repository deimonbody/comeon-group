import { IGame } from '../../common/interfaces';

export interface IState {
  games: IGame[];
  isLoading: boolean;
}
export enum GameActions {
  SET_GAMES = 'SET_GAMES',
  SET_GAMES_LOADING = 'SET_GAMES_LOADING',
}
