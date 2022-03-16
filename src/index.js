import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { red } from '@mui/material/colors';
import theme from './theme';
import APP2 from './APP2';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import TravelDestinations from './pages/TravelDestinations';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/destinations" element={<TravelDestinations />} />
    </Routes>
  </BrowserRouter>
    </ThemeProvider>
    {/* <APP2 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
