import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user';
import { gamesReducer } from './games';
import { categoriesReducer } from './categories';

export const reducer = combineReducers({
  userReducer,
  gamesReducer,
  categoriesReducer,
});
