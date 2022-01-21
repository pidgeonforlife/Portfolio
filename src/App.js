import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from "./pages/Home";
import SpotMe from './pages/SpotMe';
import Handy from './pages/Handy';
import SYPTech from './pages/SYPTech';
import MaplestoryText from './pages/MapleStoryText';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SpotMe' element={<SpotMe />}/>
        <Route path='/Handy' element={<Handy />}/>
        <Route path='/SYPTech' element={<SYPTech />}/>
        <Route path='/MapleStory' element={<MaplestoryText />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
