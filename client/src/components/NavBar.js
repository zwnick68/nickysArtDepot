
import React from 'react'
import { NavLink , Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <div class= "navbar">
        <Link to="/">Home</Link> 
        <Link to="/pieces" >Pieces</Link>
        <Link to="/artists">Artists</Link>
        <NavLink to="/movements">Movements</NavLink>
        </div>
    )
}

export default NavBar