export const types = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  GET_PARTNERS: 'GET_PARTNERS',
  GET_PARTNERS_SUCCESS: 'GET_PARTNERS_SUCCESS'
}

export const actions = {
  toggleSidebar: () => ({type: types.TOGGLE_SIDEBAR}),
  getPartners: () => ({type: types.GET_PARTNERS}),
  getPartnersSuccess: (partners) => ({type: types.GET_PARTNERS_SUCCESS, partners})
}
