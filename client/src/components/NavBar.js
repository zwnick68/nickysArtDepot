import React from 'react'
import { Router } from 'react-router'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
        <NavLink to="/">Pieces</NavLink>
        <NavLink to="/artists">Artists</NavLink>
        <NavLink to="/movements">Movements</NavLink>
        </div>
    )
}

export default NavBar