import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppNavBar.css'

export default function AppNavBar() {
  
  return (
    <>
    <div className='navContainer'>
      <nav>
        <div>LOGO</div>
        <div className="navLinkContainer">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      </nav>
    </div>
    </>
  )
}
