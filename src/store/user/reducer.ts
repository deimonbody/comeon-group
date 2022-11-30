import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IState } from './common';
import * as userActions from './actions';

export const userReducer = (builder: ActionReducerMapBuilder<IState>) => {
  builder
    .addCase(userActions.setUser.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.user = actions.payload;
    })
    .addCase(userActions.setLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(userActions.setUser.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(userActions.logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = {
        username: null,
        password: null,
        name: null,
        avatar: null,
        event: null,
      };
    });
};
