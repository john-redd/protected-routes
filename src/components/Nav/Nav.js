import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav-container'>
      <Link to="/protected" className='nav-link'>Protected Component</Link>
      <Link to="/not-protected" className='nav-link'>Unprotected Component</Link>
    </nav>
  )
}

export default Nav
