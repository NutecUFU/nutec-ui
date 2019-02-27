import Immutable from 'seamless-immutable'
import { createReducer } from '../../core/utils/redux'
import { types } from './team-actions'

const INITIAL_STATE = Immutable({})

const getTeamSuccess = (state, actions) => {
  return state.merge({list: actions.team})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.GET_TEAM_SUCCESS]: getTeamSuccess
})

export default reducer