import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { red } from '@mui/material/colors';
import theme from './theme';
import APP2 from './APP2';



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    {/* <APP2 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
