import { Control } from 'react-hook-form';

export interface ILoginProps {
  username: string;
  password: string;
}
export interface ILoginInput {
  control: Control<ILoginProps> | undefined;
  name: 'username' | 'password';
  placeholder: string;
  type: string;
}
export interface IUser {
  username: string | null;
  password: string | null;
  name: string | null;
  avatar: string | null;
  event: string | null;
}
export interface IWrapper {
  children: JSX.Element | JSX.Element[];
}
export interface IGame {
  categoryIds: number[];
  code: string;
  description: string;
  icon: string;
  name: string;
}
export interface ICategory {
  name: string;
  id: number;
}
