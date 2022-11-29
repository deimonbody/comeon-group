import { createSlice } from '@reduxjs/toolkit';
import { IState } from './common';
import { gamesReducer } from './reducer';

const initialState: IState = {
  isLoading: false,
  games: [],
};
const { reducer } = createSlice({
  name: 'gamesReducer',
  initialState,
  reducers: {},
  extraReducers: gamesReducer,
});
export { reducer };
