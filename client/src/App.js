
import './App.css';
import React from 'react';
import {Link, Routes, Route, BrowserRouter as Router} from "react-router-dom"; 
import Artists from './components/Artists';
import Movements from './components/Movements';
import NavBar from './components/NavBar';
import Home from './components/Home'
import PiecesContainer from './components/PiecesContainer';
import {useState, useEffect} from 'react'

const App = () => {

  const [art,setArt] = useState()
  const [refetch,setRefetch] = useState(false)

  const fetchData = () =>  {

        try {
            (
              async() => {
                let req = await fetch('http://127.0.0.1:8000/pieces')
                let res = await req.json()
                setArt(res)
            })()  }
            catch (error) {
                console.log(error)
            }
          }

        useEffect(()=> {
          fetchData()
        },[refetch])
        console.log(art)

  return (
    <div>
        <NavBar/>
          <Routes>
            <Route path = '/' element={<Home refetch={refetch} setRefetch={setRefetch} art={art} setArt={setArt}/>} />
            <Route path = '/pieces' element={<PiecesContainer art={art} refetch={refetch} setRefetch={setRefetch}/>} />
            <Route path = '/artists' element={<Artists/>} />
            <Route path = '/movements' element={<Movements/>} />
          </Routes>
    </div>
  );
}

export default App;

