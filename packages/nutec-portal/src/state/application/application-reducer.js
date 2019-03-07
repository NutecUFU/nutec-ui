import Immutable from 'seamless-immutable'
import { createReducer } from '../../core/utils/redux'
import { types } from './application-actions'

const INITIAL_STATE = Immutable({
  sidebar: false
})

const toggleSidebar = (state, action) => {
  return state.merge({sidebar: !state.sidebar})
}

const getPartnersSuccess = (state, action) => {
  return state.merge({partners: action.partners})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.TOGGLE_SIDEBAR]: toggleSidebar,
  [types.GET_PARTNERS_SUCCESS]: getPartnersSuccess
})

export default reducer
