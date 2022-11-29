import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { ILoginProps } from '../../common/interfaces';
import { LoginBtn, LoginInput, LoginTitle, LoginWrapper } from '../Styled/Login';
import { loginSchema } from '../../common/schemas';

export const Login = () => {
  const { control, handleSubmit } = useForm<ILoginProps>({
    mode: 'onChange',
    defaultValues: {
      userName: '',
      password: '',
    },
    resolver: joiResolver(loginSchema),
  });
  const onSubmit = (data: ILoginProps) => {
    console.log(data);
  };
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginInput placeholder="name..." name="userName" type="text" control={control} />
      <LoginInput placeholder="password..." name="password" type="text" control={control} />
      <LoginBtn onClick={handleSubmit(onSubmit)}>Login</LoginBtn>
    </LoginWrapper>
  );
};
