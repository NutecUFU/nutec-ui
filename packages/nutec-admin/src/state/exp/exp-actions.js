export const types = {
  GET_ALL_EXP: 'GET_ALL_EXP',
  GET_ALL_EXP_SUCCESS: 'GET_ALL_EXP_SUCCESS',
  GET_EXP: 'GET_EXP',
  GET_EXP_SUCCESS: 'GET_EXP_SUCCESS',
  TOGGLE_MODAL_CREATE: 'TOGGLE_MODAL_CREATE',
  TOGGLE_MODAL_ITEM: 'TOGGLE_MODAL_ITEM',
  CREATE_EXP: 'CREATE_EXP',
  CREATE_EXP_SUCCESS: 'CREATE_EXP_SUCCESS',
  DELETE_EXP: 'DELETE_EXP',
  DELETE_EXP_SUCCESS: 'DELETE_EXP_SUCCESS'
}

export const actions = {
  getAllExp: () => ({type: types.GET_ALL_EXP}),
  getAllExpSuccess: (list) => ({type: types.GET_ALL_EXP_SUCCESS, list}),
  getExp: (id)=> ({type: types.GET_EXP, id}),
  getExpSuccess: (exp)=> ({type: types.GET_EXP_SUCCESS, exp}),
  toggleModalCreate: () =>({type: types.TOGGLE_MODAL_CREATE}),
  toggleModalItem: (info) => ({type: types.TOGGLE_MODAL_ITEM, info}),
  createExp: (dados) => ({type: types.CREATE_EXP, dados}),
  createExpSuccess: () => ({type: types.CREATE_EXP_SUCCESS}),
  deleteExp: (id) => ({type: types.DELETE_EXP, id}),
  deleteExpSuccess: () => ({type: types.DELETE_EXP_SUCCESS})
}