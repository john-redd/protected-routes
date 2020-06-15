import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from 'components/Login/Login'
import UnprotectedComponent from 'components/UnprotectedComponent'
import ProtectedComponent from 'components/ProtectedComponent'

const Routes = props => {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/not-protected' component={UnprotectedComponent} />
      <Route path='/protected' component={ProtectedComponent} />
    </Switch>
  )
}

export default Routes