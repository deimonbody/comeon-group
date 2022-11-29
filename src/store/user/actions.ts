import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { ILoginProps, IUser } from '../../common/interfaces';
import { loginUserAPI } from '../../helper/api.helper';
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
const setLoading = createAction(UserActions.SET_LOADING);

export { setUser, setLoading };
