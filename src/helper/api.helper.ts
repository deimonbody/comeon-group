import { ICategory, IGame, ILoginProps } from '@route/common/interfaces';
import instance from '@route/config/axios.config';

const loginUserAPI = async ({ username, password }: ILoginProps) => {
  const result = await instance.post('/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      username,
      password,
    },
  });
  return result;
};
const loadGamesAPI = async () => {
  const result = await instance.get('/games');
  return result.data as IGame[];
};
const loadCategoriesAPI = async () => {
  const result = await instance.get('/categories');
  return result.data as ICategory[];
};
const logoutUserAPI = async (username: string) => {
  const result = await instance.post('/logout', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: {
      username,
    },
  });
  return result.data;
};
export { loginUserAPI, loadGamesAPI, loadCategoriesAPI, logoutUserAPI };
