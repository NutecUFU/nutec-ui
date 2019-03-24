import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/user/user-actions'

const INITIAL_STATE = Immutable({})

const createUser = (state, action) => {
  return state.merge({loading: true})
}

const createUserSuccess = (state, action) => {
  return state.merge({loading: false})
}

const toggleModal = (state, action) => {
  return state.merge({modal: !state.modal})
}

const getAllUsersSuccess = (state, action) => {
  return state.merge({list: action.list})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.CREATE_USER]: createUser,
  [types.CREATE_USER_SUCCESS]: createUserSuccess,
  [types.TOGGLE_MODAL]: toggleModal,
  [types.GET_ALL_USER_SUCCESS]: getAllUsersSuccess
})

export default reducer
