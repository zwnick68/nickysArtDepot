import './App.css';
import React from 'react';
import {Link, Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Pieces from './components/Pieces';
import Artists from './components/Artists';
import Movements from './components/Movements';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
        <NavBar/>
          <Routes>
            <Route path = '/' exact component={Pieces} />
            <Route path = '/artists' exact component={Artists} />
            <Route path = '/movements' exact component={Movements} />
          </Routes>
    </>
  );
}

export default App;
