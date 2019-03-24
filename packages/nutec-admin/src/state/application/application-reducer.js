import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { ApplicationTypes } from 'state/application/application-actions'

const INITIAL_STATE = Immutable({
  sidebar: false
})

const toggleSidebar = (state, action) => {
  return state.merge({sidebar: !state.sidebar})
}

const reducer = createReducer(INITIAL_STATE, {
  [ApplicationTypes.TOGGLE_SIDEBAR]: toggleSidebar
})

export default reducer
