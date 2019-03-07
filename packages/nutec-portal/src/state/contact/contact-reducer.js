import Immutable from 'seamless-immutable'
import { createReducer } from '../../core/utils/redux'
import { types } from './contact-actions'

const INITIAL_STATE = Immutable({
  create: false
})

const createContactSuccess = (state, action) => {
  return state.merge({create: true})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.CREATE_CONTACT_SUCCESS]: createContactSuccess
})

export default reducer