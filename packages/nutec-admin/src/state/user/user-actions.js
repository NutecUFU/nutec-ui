export const types = {
  CREATE_USER: 'CREATE_USER',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  GET_ALL_USER: 'GET_ALL_USER',
  GET_ALL_USER_SUCCESS: 'GET_ALL_USER_SUCCESS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  DELETE_USER: 'DELETE_USER',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  ACTIVE_USER: 'ACTIVE_USER'
}

export const actions = {
  createUser: (user, register) => ({type: types.CREATE_USER, user, register}),
  createUserSuccess: () => ({type: types.CREATE_USER_SUCCESS}),
  getAllUser: () => ({type: types.GET_ALL_USER}),
  getAllUserSuccess: (list) => ({type: types.GET_ALL_USER_SUCCESS, list}),
  toggleModal: () => ({type: types.TOGGLE_MODAL}),
  deleteUser: (id) => ({type: types.DELETE_USER, id}),
  deleteUserSuccess: () => ({type: types.DELETE_USER_SUCCESS}),
  activeUser: (id, value) => ({type: types.ACTIVE_USER, id, value})
}
