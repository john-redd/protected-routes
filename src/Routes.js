import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from 'utils/ProtectedRoute'
import Login from 'components/Login/Login'
import UnprotectedComponent from 'components/UnprotectedComponent'
import ProtectedComponent from 'components/ProtectedComponent'

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/not-protected' component={UnprotectedComponent} />
      <ProtectedRoute path='/protected' component={ProtectedComponent} />
    </Switch>
  )
}

export default Routes