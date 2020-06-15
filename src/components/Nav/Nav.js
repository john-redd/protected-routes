import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { useSelector } from 'react-redux'

const Nav = () => {
  const isAuthenticated = useSelector( reduxState => reduxState.userReducer.isAuthenticated)
  return (
    <nav className='nav-container'>
      <Link to="/protected" className='nav-link'>Protected Component</Link>
      <Link to="/not-protected" className='nav-link'>Unprotected Component</Link>
      <Link to="/admin" className='nav-link'>Admin</Link>
      <Link to="/super-admin" className='nav-link'>Super Admin</Link>
    </nav>
  )
}

export default Nav
