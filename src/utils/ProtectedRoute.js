import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ProtectedRoute = ({ exact = false, path, component }) => {
  const isAuthenticated = useSelector(
    (reduxState) => reduxState.userReducer.isAuthenticated
  )
  const location = useLocation()

  return (
    <>
      {isAuthenticated ? (
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
