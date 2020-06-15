import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from 'utils/ProtectedRoute'
import Login from 'components/Login/Login'
import UnprotectedComponent from 'components/UnprotectedComponent'
import ProtectedComponent from 'components/ProtectedComponent'
import AdminComponent from 'components/AdminComponent'
import SuperAdminComponent from 'components/AdminComponent'
import { ADMIN, SUPER_ADMIN } from 'constants/ROLES'

const Routes = props => {
  const { state } = props
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/not-protected' component={UnprotectedComponent} />
      <ProtectedRoute path='/protected' component={ProtectedComponent} />
      <ProtectedRoute path='/admin' component={AdminComponent} roles={[ADMIN, SUPER_ADMIN]} />
      <ProtectedRoute path='/super-admin' component={SuperAdminComponent} roles={[SUPER_ADMIN]} />
    </Switch>
  )
}

export default Routes