import './App.css';
import React from 'react';
import {Link, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Pieces from './components/Pieces';
import Artists from './components/Artists';
import Movements from './components/Movements';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
        <NavBar/>
          <Routes>
            <Route path = '/' element={<Pieces/>} />
            <Route path = '/artists' element={<Artists/>} />
            <Route path = '/movements' element={<Movements/>} />
          </Routes>
    </div>
  );
}

export default App;
