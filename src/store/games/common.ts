import { IGame } from '@route/common/interfaces';

export interface IState {
  games: IGame[];
  isLoading: boolean;
  searchGameWord: null | string;
}
export enum GameActions {
  SET_GAMES = 'SET_GAMES',
  SET_GAMES_LOADING = 'SET_GAMES_LOADING',
  SET_SEARCH_GAME_WORD = 'SET_SEARCH_GAME_WORD',
}
