import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/auth/auth-actions'

const INITIAL_STATE = Immutable({})

const loginRequest = (state, action) => {
  return state.merge({loading: true})
}

const loginSuccess = (state, action) => {
  return state.merge({
    loading: false,
    isLogged: true
  })
}

const logout = (state, action) => {
  return INITIAL_STATE
}

const loginFailed = (state, action) => {
  return state.merge({loading: false})
}

const verifyUser = (state, action) => {
  return state.merge({loading: true});
}

const verifyUserSuccess = (state, action) => {
  return state.merge({
    loading: false,
    status: action.status
  })
}

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_REQUEST]: loginRequest,
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_FAILED]: loginFailed,
  [types.VERIFY_USER_REQUEST]: verifyUser,
  [types.VERIFY_USER_REQUEST_SUCCESS]: verifyUserSuccess,
  [types.LOGOUT]: logout
})

export default reducer
