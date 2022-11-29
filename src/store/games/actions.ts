import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IGame } from '../../common/interfaces';
import { loadGamesAPI } from '../../helper/api.helper';
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
export { setGames, setLoading };