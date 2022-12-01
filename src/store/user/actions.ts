import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { ILoginProps, IUser } from '@route/common/interfaces';
import { loginUserAPI, logoutUserAPI } from '@route/helper/api.helper';
import { UserActions } from './common';

const setUser = createAsyncThunk(
  UserActions.SET_USER,
  async ({ username, password }: ILoginProps): Promise<IUser> => {
    try {
      const result = await loginUserAPI({
        username: username as string,
        password: password as string,
      });
      const { name, avatar, event } = result.data.player;
      return {
        username,
        password,
        name,
        event,
        avatar,
      };
    } catch (err) {
      throw new Error(err as string);
    }
  }
);
const setLoading = createAction(UserActions.SET_USER_LOADING);
const logout = createAsyncThunk(UserActions.LOGOUT_USER, async (username: string) => {
  try {
    const result = await logoutUserAPI(username);
    return result;
  } catch (err) {
    throw new Error(err as string);
  }
});
export { setUser, setLoading, logout };
