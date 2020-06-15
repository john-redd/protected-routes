import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {
  const { path, component, roles } = props

  const {
    isAuthenticated,
    user
  } = useSelector((reduxState) => reduxState.userReducer)

  const checkRole = (roles) => {
    console.log(roles);
    
    if(roles){
      return roles.includes(user.role_id)
    }

    return true
  }

  if (isAuthenticated && checkRole(roles)) {
    return <Route path={path} component={component} />
  }

  return <Redirect to="/" />
  // return isAuthenticated ? <Route path={path} component={component} /> : <Redirect to="/" />
}

export default ProtectedRoute
