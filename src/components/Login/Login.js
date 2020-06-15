import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import useForm from 'hooks/useForm'
import useAxios from 'hooks/useAxios'
import { updateUser, logoutUser } from 'redux/reducers/user'
import validateEmail from 'utils/validateEmail'
import './login.css'

import Loading from 'utils/Loading'

const Login = props => {
  // const { updateUser, logoutUser } = this.props
  const [formState, setFormState, resetForm] = useForm({ email: '', password: '' })
  const isAuthenticated = useSelector(
    (reduxState) => reduxState.userReducer.isAuthenticated
  )
  const dispatch = useDispatch()

  const validateForm = (formValues) => {
    let validForm = false
    if (!validateEmail(formValues.email)) {
      setFormState('error')('Please input a valid email.')
      return validForm
    }

    if (!formValues.password) {
      setFormState('error')('Please input a password.')
      return validForm
    }

    validForm = true
    return validForm
  }

  const [
    { data: newUser, error: registerError, isLoading: isRegistering },
    registerUser
  ] = useAxios({ url: '/auth/register', method: 'POST' }, { manual: true })

  const register = (e) => {
    e.preventDefault()

    if(validateForm(formState)){
      registerUser({ data: formState })
      resetForm()
    }
  }

  const [
    { data: user, error: loginError, isLoading: isLoggingIn },
    loginUser
  ] = useAxios({ url: '/auth/login', method: 'POST' }, { manual: true })

  const login = (e) => {
    e.preventDefault()

    if (validateForm(formState)) {
      loginUser({ data: formState })
      resetForm()
    }
  }

  const [{ isLoading: isLoggingOut }, logoutRequest] = useAxios(
    { url: '/auth/logout', method: 'DELETE' },
    { manual: true }
  )

  const logout = (e) => {
    e.preventDefault()

    logoutRequest()
    dispatch(logoutUser())
  }

  useEffect(() => {
    if (user) {
      dispatch(updateUser(user))
    }

    if (newUser) {
      dispatch(updateUser(newUser))
    }
  }, [user, dispatch, newUser])

  return (
    <div className="login-main-container">
      <form noValidate className="login-form-container">
        <div className="login-form-item">
          <label className="login-form-label">Email:</label>
          <input
            className="login-form-input"
            // name="email"
            type='email'
            value={formState.email}
            onChange={setFormState('email')}
            required
          />
        </div>
        <div className="login-form-item">
          <label className="login-form-label">Password:</label>
          <input
            className="login-form-input"
            // name="password"
            type='password'
            value={formState.password}
            onChange={setFormState('password')}
            required
          />
        </div>
        <div className="button-container">
          <button className="button" onClick={login}>
            Login
          </button>
          <button className="button" onClick={register}>
            Register
          </button>
          {isAuthenticated && (
            <button className="button" onClick={logout}>
              Logout
            </button>
          )}
        </div>
        {(loginError || registerError || formState.error) && (
          <p className="login-error-message">
            {loginError
              ? loginError
              : registerError
              ? registerError
              : formState.error}
          </p>
        )}
      {(isLoggingIn || isRegistering || isLoggingOut) && (
        <div className="loading-container">
          <Loading />
        </div>
      )}
      </form>
    </div>
  )
}

// const mapDispatchToProps = {
//   updateUser,
//   logoutUser
// }

// export default connect(null, mapDispatchToProps)(Login)
export default Login
