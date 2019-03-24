import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import {types} from './profile-actions'

const INITIAL_STATE = Immutable({})

const getProfileSuccess = (state, actions) => {
  return state.merge({user: actions.profile})
}

const reducer = createReducer(INITIAL_STATE,{
  [types.GET_PROFILE_SUCCESS]: getProfileSuccess
})

export default reducer