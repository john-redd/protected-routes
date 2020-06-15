import { useState } from 'react'

// Initial state should be an object with a key value pair for every input in the form
const useForm = (initialValues) => {
  const initialState = {
    ...initialValues,
    error: null
  }
  const [state, setState] = useState(initialState)

  const setFormState = (name) => (e) => {
    if (name === 'error') {
      return setState({ ...state, [name]: e })
    }
    setState({ ...state, [name]: e.target.value })
  }

  const resetFormState = () => {
    setState(initialState)
  }
  return [state, setFormState, resetFormState]
}

export default useForm
