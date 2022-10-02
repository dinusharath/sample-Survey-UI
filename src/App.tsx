import React from 'react';
import './App.css';
import Login from './app/auth/login/Login';
import { blueGrey, blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalDetails from './app/survey/personal-details/PersonalDetails';
import Workplace from './app/survey/work-place/workPlace';
import Mobility from './app/survey/mobility/mobility';

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
            <Route path='/' element={<PersonalDetails />} />
            <Route path='/2' element={<Workplace />} />
            <Route path='/3' element={<Mobility />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div >
  );
}

export default App;
