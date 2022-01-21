import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from "./pages/Home";
import SpotMe from './pages/SpotMe';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SpotMe' element={<SpotMe />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
