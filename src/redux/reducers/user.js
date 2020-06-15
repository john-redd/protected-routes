const initialState = {
  user: {
    id: null,
    email: '',
    roleId: null
  },
  isAuthenticated: false
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  }
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case UPDATE_USER:
      return { ...state, user: { ...payload }, isAuthenticated: true }
    default:
      return state
  }
}
