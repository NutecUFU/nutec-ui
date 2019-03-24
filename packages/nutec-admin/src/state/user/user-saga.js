import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './user-actions'
import { actions as toasterActions } from '../toaster/toaster-actions';
import UserApi from 'api/user'

export function* deleteUser(action) {
  try {
    yield call([UserApi, UserApi.delete], action.id);
    yield put(toasterActions.addToast('success', 'Usuário deletado com sucesso :)'));
    yield call(getAllUsers);
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível deletar usuário :('))
  }
}

export function* createUser(action) {
  try {
    yield call([UserApi, UserApi.create], action.user);
    yield put(actions.createUserSuccess());
    if(!action.register){
      yield call(getAllUsers);
      yield put(actions.toggleModal());
    }
    yield put(toasterActions.addToast('success', 'Usuário cadastrado :)'));
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível criar usuário!'));
  }
}

export function* getAllUsers() {
  try {
    const users = yield call([UserApi, UserApi.getAll])
    yield put(actions.getAllUserSuccess(users))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os usuários!'))
  }
}

export function* activeUser(action) {
  try {
    yield call([UserApi, UserApi.alter], action.id, action.value)
    yield put(toasterActions.addToast('success', 'Usuário ativado :)'))
    yield call(getAllUsers);
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível ativar o usuário!'))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.GET_ALL_USER, getAllUsers),
    takeEvery(types.CREATE_USER, createUser),
    takeEvery(types.DELETE_USER, deleteUser),
    takeEvery(types.ACTIVE_USER, activeUser)
  ])
}
