import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ProtectedRoute = ({ exact = false, path, component, roles }) => {
  const isAuthenticated = useSelector(
    (reduxState) => reduxState.userReducer.isAuthenticated
  )
  const roleId = useSelector(
    (reduxState) => reduxState.userReducer.user.role_id
  )
  const location = useLocation()

  const checkRole = (roles) => {
    if(roles){
      return roles?.includes(roleId)
    }

    return true
  }

  return (
    <>
      {isAuthenticated && checkRole(roles) ? (
        <Route exact={exact} path={path} component={component} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location.pathname }
          }}
        />
      )}
    </>
  )
}

export default ProtectedRoute
