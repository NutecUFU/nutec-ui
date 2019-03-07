import { createReducer } from '../../core/utils/redux'

const INITIAL_STATE = [];

const ADD_TOAST = (state, {typeToast, msg}) => {
  return [{typeToast, msg}]
}

const reducer = createReducer(INITIAL_STATE, {
  ADD_TOAST
})

export default reducer