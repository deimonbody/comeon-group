import { Control } from 'react-hook-form';

export interface ILoginProps {
  userName: string;
  password: string;
}
export interface ILoginInput {
  control: Control<ILoginProps> | undefined;
  name: 'userName' | 'password';
  placeholder: string;
  type: string;
}
