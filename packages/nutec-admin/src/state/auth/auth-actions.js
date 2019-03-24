export const types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  VERIFY_USER_REQUEST: 'VERIFY_USER_REQUEST',
  VERIFY_USER_REQUEST_SUCCESS: 'VERIFY_USER_REQUEST_SUCCESS',
  IS_USER_LOGGED: 'IS_USER_LOGGED',
  IS_USER_LOGGED_SUCCESS: 'IS_USER_LOGGED_SUCCESS',
  LOGOUT: 'LOGOUT'
}

export const actions = {
  verifyUserRequest: (email) => ({type: types.VERIFY_USER_REQUEST, email}),
  verifyUserRequestSuccess: (data) => ({type: types.VERIFY_USER_REQUEST_SUCCESS, status: data.status}),
  loginRequest: (data) => ({type: types.LOGIN_REQUEST, data}),
  loginSuccess: () => ({type: types.LOGIN_SUCCESS}),
  loginFailed: () => ({type: types.LOGIN_FAILED}),
  isUserLogged: () => ({type: types.IS_USER_LOGGED}),
  isUserLoggedSuccess: () => ({type: types.IS_USER_LOGGED_SUCCESS}),
  logout: () => ({type: types.LOGOUT})
}
