import { ILoginProps } from '../common/interfaces';
import instance from '../config/axios.config';

export const loginUserAPI = async ({ username, password }: ILoginProps) => {
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
