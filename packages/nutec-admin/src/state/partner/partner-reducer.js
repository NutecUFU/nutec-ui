import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/partner/partner-actions'

const INITIAL_STATE = Immutable({})

const getAllPartnersSuccess = (state, action) => {
  return state.merge({list: action.list})
}

const getPartnerSuccess = (state, action) => {
  return state.merge({info: action.exp})
}

const deletePartnerSuccess = (state, action) => {
  return state.merge({info: null})
}

const toggleModalCreate = (state, action) => {
  return state.merge({create: !state.create})
}

const toggleModalItem = (state, action) => {
  return state.merge({item: !state.item, info: action})
}

const createPartner = (state, action) => {
  return state.merge({loading: true})
}

const createPartnerSuccess = (state, action) => {
  return state.merge({loading: false})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.GET_ALL_PARTNERS_SUCCESS]: getAllPartnersSuccess,
  [types.GET_PARTNER_SUCCESS]: getPartnerSuccess, 
  [types.TOGGLE_MODAL_CREATE]: toggleModalCreate,
  [types.TOGGLE_MODAL_ITEM]: toggleModalItem,
  [types.CREATE_PARTNER]: createPartner,
  [types.CREATE_PARTNER_SUCCESS]: createPartnerSuccess,
  [types.DELETE_PARTNER_SUCCESS]: deletePartnerSuccess
})

export default reducer
