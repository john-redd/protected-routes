import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const addPreviousRoute = newLocation => previousLocation => {
    return {
      pathname: newLocation,
      state: {
        from: previousLocation.pathname
      }
    }
  }
  return (
    <nav className='nav-container'>
      <Link to="/not-protected" className='nav-link'>Unprotected Component</Link>
      <Link to="/protected" className='nav-link'>Protected Component</Link>
      <Link to={addPreviousRoute('/admin')} className='nav-link'>Admin Component</Link>
      <Link to="/super-admin" className='nav-link'>Super Admin Component</Link>
    </nav>
  )
}

export default Nav
