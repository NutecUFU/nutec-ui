import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './exp-actions'
import { actions as toasterActions } from '../toaster/toaster-actions';
import ExpAPI from 'api/exp'

export function* getAllExp() {
  try{
    const exps = yield call([ExpAPI, ExpAPI.getAll])
    yield put(actions.getAllExpSuccess(exps))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os experimentos!'))
  }
}

export function* getExp(action){
  try {
    const exp = yield call([ExpAPI, ExpAPI.getExp], action.id)
    yield put(actions.getExpSuccess(exp))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar o experimento!'))
  }
}

export function* createExp(action) {
  try {
    yield call([ExpAPI, ExpAPI.create], action.dados)
    yield put(actions.createExpSuccess())
    yield call(getAllExp)
    yield put(actions.toggleModalCreate());
    yield put(toasterActions.addToast('success', 'Experimento cadastrado :)'));
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível cadastrar o experimento :('))
  }
}

export function* deleteExp(action) {
  try {
    yield call([ExpAPI, ExpAPI.delete], action.id)
    yield call(getAllExp)
    yield put(actions.deleteExpSuccess())
    yield put(actions.toggleModalItem())
    yield put(toasterActions.addToast('success', 'Experimento deletado :)'))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível deletar o experimento :('))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.GET_ALL_EXP, getAllExp),
    takeEvery(types.GET_EXP, getExp),
    takeEvery(types.CREATE_EXP, createExp),
    takeEvery(types.DELETE_EXP, deleteExp)
  ])
}