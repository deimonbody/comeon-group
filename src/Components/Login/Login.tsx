import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';
import { ILoginProps } from '../../common/interfaces';
import { LoginBtn, LoginInput, LoginTitle, LoginWrapper } from '../Styled/Login';
import { loginSchema } from '../../common/schemas';
import { loginUserAPI } from '../../helper/api.helper';

export const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<ILoginProps>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: joiResolver(loginSchema),
  });
  const onSubmit = (data: ILoginProps) => {
    setIsLoading(true);
    loginUserAPI(data)
      .then(() => {
        toast.success('Succes!');
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginInput placeholder="name..." name="username" type="text" control={control} />
      <LoginInput placeholder="password..." name="password" type="text" control={control} />
      <LoginBtn isDisable={isLoading} onClick={handleSubmit(onSubmit)}>
        Login
      </LoginBtn>
    </LoginWrapper>
  );
};
