import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useForm from 'hooks/useForm'
import useAxios from 'hooks/useAxios'
import { updateUser } from 'redux/reducers/user'
import './login.css'

import Loading from 'utils/Loading'

const Login = () => {
  const [formState, setFormState] = useForm({ email: '', password: '' })
  const dispatch = useDispatch()
  const [{ data: user, error: loginError, isLoading }, loginUser] = useAxios(
    { url: '/auth/login', method: 'POST' },
    { manual: true }
  )

  const submit = (e) => {
    e.preventDefault()
    if (formState.email === '' || formState.password === '') {
      return setFormState('error')('Please complete the form!')
    }
    loginUser({ data: formState })
  }

  useEffect(() => {
    if (user) {
      dispatch(updateUser(user))
    }
  }, [user, dispatch])

  return (
    <div className="login-main-container">
      <div>Login</div>
      <form onSubmit={submit} noValidate className="login-form-container">
        <div className="login-form-item">
          <label className="login-form-label">Email:</label>
          <input
            // name="email"
            value={formState.email}
            onChange={setFormState('email')}
            required
          />
        </div>
        <div className="login-form-item">
          <label className="login-form-label">Password:</label>
          <input
            className="login-form-item"
            // name="password"
            value={formState.password}
            onChange={setFormState('password')}
            required
          />
        </div>
        <button className="button" type="submit">
          {isLoading ? <Loading /> : 'Login'}
        </button>
        {(loginError || formState.error) && (
          <p className="login-error-message">
            {loginError ? loginError : formState.error}
          </p>
        )}
      </form>
    </div>
  )
}

export default Login
