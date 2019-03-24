import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/toaster/toaster-actions'

const INITIAL_STATE = [];

const ADD_TOAST = (state, {typeToast, msg}) => {
  return [{typeToast, msg}]
}

const reducer = createReducer([], {
  ADD_TOAST
})

export default reducer
