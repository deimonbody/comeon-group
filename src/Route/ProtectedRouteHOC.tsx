import { PATHES } from '@route/common/enum';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: JSX.Element;
  isAuth: boolean;
}
export const ProtectedRouteHOC: React.FC<IProps> = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to={PATHES.LOGIN} />;
};
