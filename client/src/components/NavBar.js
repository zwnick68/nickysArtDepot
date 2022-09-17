
import React from 'react'
import { NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react'

const NavBar = () => {

const [art,setArt] = useState([])

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
    },[])
    console.log(art)
    return (
        <div>
        <NavLink to="/" state={art}>Pieces</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/movements">Movements</NavLink>
        </div>
    )
}

export default NavBar