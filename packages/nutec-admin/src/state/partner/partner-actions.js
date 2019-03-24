export const types = {
  GET_ALL_PARTNERS: 'GET_ALL_PARTNERS',
  GET_ALL_PARTNERS_SUCCESS: 'GET_ALL_PARTNERS_SUCCESS',
  GET_PARTNER: 'GET_PARTNER',
  GET_PARTNER_SUCCESS: 'GET_PARTNER_SUCCESS',
  TOGGLE_MODAL_CREATE: 'TOGGLE_MODAL_CREATE',
  TOGGLE_MODAL_ITEM: 'TOGGLE_MODAL_ITEM',
  CREATE_PARTNER: 'CREATE_PARTNER',
  CREATE_PARTNER_SUCCESS: 'CREATE_PARTNER_SUCCESS',
  DELETE_PARTNER: 'DELETE_PARTNER',
  DELETE_PARTNER_SUCCESS: 'DELETE_PARTNER_SUCCESS'
}

export const actions = {
  getAllPartners: () => ({type: types.GET_ALL_PARTNERS}),
  getAllPartnersSuccess: (list) => ({type: types.GET_ALL_PARTNERS_SUCCESS, list}),
  getPartner: (id)=> ({type: types.GET_PARTNER, id}),
  getPartnerSuccess: (exp)=> ({type: types.GET_PARTNER_SUCCESS, exp}),
  toggleModalCreate: () =>({type: types.TOGGLE_MODAL_CREATE}),
  toggleModalItem: (info) => ({type: types.TOGGLE_MODAL_ITEM, info}),
  createPartner: (dados) => ({type: types.CREATE_PARTNER, dados}),
  createPartnerSuccess: () => ({type: types.CREATE_PARTNER_SUCCESS}),
  deletePartner: (id) => ({type: types.DELETE_PARTNER, id}),
  deletePartnerSuccess: () => ({type: types.DELETE_PARTNER_SUCCESS})
}