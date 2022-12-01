import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { myTheme } from '@route/myTheme';
import { Routing } from '@route/Route/Routing';

export const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </ThemeProvider>
  );
};
