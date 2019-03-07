import Immutable from 'seamless-immutable'
import { createReducer } from '../../core/utils/redux'
import { types } from './exp-actions'

const INITIAL_STATE = Immutable({})

const getAllExpSuccess = (state, actions) => {
  return state.merge({list: actions.exps})
}

const reducer = createReducer(INITIAL_STATE,{
  [types.GET_ALL_EXP_SUCCESS]: getAllExpSuccess
})

export default reducer