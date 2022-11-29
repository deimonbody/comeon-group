import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ILoginProps } from '../../common/interfaces';
import { LoginBtn, LoginInput, LoginTitle, LoginWrapper } from '../Styled/Login';
import { loginSchema } from '../../common/schemas';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { userActions } from '../../store/user';
import { PATHES } from '../../common/enum';

export const Login = () => {
  const dispatch = useAppDispatch();

  const { control, handleSubmit, reset } = useForm<ILoginProps>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: joiResolver(loginSchema),
  });

  const { isLoading } = useAppSelector((store) => store.userReducer);
  const navigate = useNavigate();

  const onSubmit = (data: ILoginProps) => {
    dispatch(userActions.setLoading());
    dispatch(userActions.setUser(data))
      .unwrap()
      .then(() => {
        toast.success('Succes!');
        navigate(PATHES.MAIN);
      })
      .catch((err) => toast.error(err.message));
    reset();
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
