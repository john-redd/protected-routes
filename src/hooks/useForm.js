import { useState } from 'react'

// Initial state should be an object with a key value pair for every input in the form
const useForm = (initialState) => {
  const [state, setState] = useState({ ...initialState, error: null })

  const setFormState = (name) => (e) => {
    if (name === 'error') {
      return setState({ [name]: e })
    }
    setState({ ...state, [name]: e.target.value })
  }
  return [state, setFormState]
}

export default useForm
