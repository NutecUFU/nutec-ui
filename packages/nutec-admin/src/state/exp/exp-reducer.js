import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/exp/exp-actions'

const INITIAL_STATE = Immutable({})

const getAllExpSuccess = (state, action) => {
  return state.merge({list: action.list})
}

const getExpSuccess = (state, action) => {
  return state.merge({info: action.exp})
}

const deleteExpSuccess = (state, action) => {
  return state.merge({info: null})
}

const toggleModalCreate = (state, action) => {
  return state.merge({create: !state.create})
}

const toggleModalItem = (state, action) => {
  return state.merge({item: !state.item, info: action})
}

const createExp = (state, action) => {
  return state.merge({loading: true})
}

const createExpSuccess = (state, action) => {
  return state.merge({loading: false})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.GET_ALL_EXP_SUCCESS]: getAllExpSuccess,
  [types.GET_EXP_SUCCESS]: getExpSuccess,
  [types.TOGGLE_MODAL_CREATE]: toggleModalCreate,
  [types.TOGGLE_MODAL_ITEM]: toggleModalItem,
  [types.CREATE_EXP]: createExp,
  [types.CREATE_EXP_SUCCESS]: createExpSuccess,
  [types.DELETE_EXP_SUCCESS]: deleteExpSuccess
})

export default reducer
