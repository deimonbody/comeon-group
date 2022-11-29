import { ICategory, IGame, ILoginProps } from '../common/interfaces';
import instance from '../config/axios.config';

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
export { loginUserAPI, loadGamesAPI, loadCategoriesAPI };
