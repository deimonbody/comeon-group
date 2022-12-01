import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IGame } from '@route/common/interfaces';
import { loadGamesAPI } from '@route/helper/api.helper';
import { GameActions } from './common';

const setGames = createAsyncThunk(GameActions.SET_GAMES, async (): Promise<IGame[]> => {
  try {
    const result = await loadGamesAPI();
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
});
const setLoading = createAction(GameActions.SET_GAMES_LOADING);
const searchGame = createAction(GameActions.SET_SEARCH_GAME_WORD, (word: string) => ({
  payload: { word },
}));
export { setGames, setLoading, searchGame };
