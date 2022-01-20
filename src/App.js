import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
