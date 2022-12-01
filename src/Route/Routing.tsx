import { PATHES } from '@route/common/enum';
import { Login } from '@route/Components/LoginPage/Login';
import { MainPage } from '@route/Components/MainPage/MainPage';
import { useAuthorized } from '@route/hooks';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRouteHOC } from './ProtectedRouteHOC';

export const Routing = () => {
  const isAuth = useAuthorized();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATHES.MAIN}
          element={
            <ProtectedRouteHOC isAuth={isAuth}>
              <MainPage />
            </ProtectedRouteHOC>
          }
        />
        <Route path={PATHES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
