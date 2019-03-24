import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from './contact-actions'

const INITIAL_STATE = Immutable({})

const getAllContactsSuccess= (state, action) => {
  return state.merge({list: action.contacts})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.GET_ALL_CONTACTS_SUCCESS]: getAllContactsSuccess
})

export default reducer