import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@route/store/hooks';
import { ILoginProps } from '@route/common/interfaces';
import { loginSchema } from '@route/common/schemas';
import { userActions } from '@route/store/user';
import { PATHES } from '@route/common/enum';
import { LoginBtn, LoginInput, LoginTitle, LoginWrapper } from '@route/Components/Styled';

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
