import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from "./pages/Home";
import SpotMe from './pages/SpotMe';
import Handy from './pages/Handy';
import SYPTech from './pages/SYPTech';
import MaplestoryText from './pages/MapleStoryText';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SpotMe' element={<SpotMe />}/>
        <Route path='/Handy' element={<Handy />}/>
        <Route path='/SYPTech' element={<SYPTech />}/>
        <Route path='/MapleStory' element={<MaplestoryText />}/>
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App;
