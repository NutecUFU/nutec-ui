import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './auth-actions'
import { saveUserAuth, logout } from 'core/utils/auth'
import AuthApi from 'api/auth'
import { actions as toasterActions } from '../toaster/toaster-actions';

export function* verifyuser(action) {
  try {
    const status = yield call([AuthApi, AuthApi.verify], action.email)
    yield put(actions.verifyUserRequestSuccess(status))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possivel entrar no sistema :('))
  }
}

export function* login(action) {
  try {
    const login = yield call([AuthApi, AuthApi.login], action.data)
    yield call(saveUserAuth, login)
    yield put(actions.loginSuccess())
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possivel entrar no sistema :('))
  }
}

export function* userLoggedCheck() {
  try {
    const check = yield call([AuthApi, AuthApi.checkAuth])
    yield put(actions.loginSuccess())
  } catch(e) {

  }
}

export function* logoutReq() {
  try {
    yield call(logout)
  } catch(e) {

  }
}

export default function* root() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, login),
    takeEvery(types.VERIFY_USER_REQUEST, verifyuser),
    takeEvery(types.IS_USER_LOGGED, userLoggedCheck),
    takeEvery(types.LOGOUT, logoutReq)
  ])
}
