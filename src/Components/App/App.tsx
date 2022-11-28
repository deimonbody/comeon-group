import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { myTheme } from '../../myTheme';
import { PATHES } from '../../common/enum';
import { Login } from '../Login/Login';

export const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path={PATHES.LOGIN} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
