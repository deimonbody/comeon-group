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
