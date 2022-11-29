import { createSlice } from '@reduxjs/toolkit';
import { IState } from './common';
import { userReducer } from './reducer';

export const initialState: IState = {
  isLoading: false,
  user: {
    username: null,
    password: null,
    name: null,
    avatar: null,
    event: null,
  },
};

const { reducer } = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {},
  extraReducers: userReducer,
});
export { reducer };
