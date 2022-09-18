
import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const NavBar = () => {

const [art,setArt] = useState()

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
        <Link to="/">Home</Link>
        <Link to="/pieces" state={art}>Pieces</Link>
        <Link to="/artists" state={{test : 'test'}}>Artists</Link>
        <NavLink to="/movements">Movements</NavLink>
        </div>
    )
}

export default NavBar