import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IState } from './common';
import * as gamesAction from './actions';

export const gamesReducer = (builder: ActionReducerMapBuilder<IState>) => {
  builder
    .addCase(gamesAction.setGames.fulfilled, (state, actions) => {
      state.games = actions.payload;
      state.isLoading = false;
    })
    .addCase(gamesAction.setGames.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(gamesAction.setLoading, (state) => {
      state.isLoading = true;
    });
};
