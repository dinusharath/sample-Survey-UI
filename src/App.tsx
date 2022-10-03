import React from 'react';
import './App.css';
import Login from './app/auth/login/Login';
import { blueGrey, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Survey from './app/survey/survey';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[800]
    },
    secondary: {
      main: blue[50]
    }
  }
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Survey />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div >
  );
}

export default App;
