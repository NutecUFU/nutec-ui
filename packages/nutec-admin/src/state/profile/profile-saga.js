import { put, call, takeEvery, all } from 'redux-saga/effects'

import UserApi from '../../api/user'
import { types, actions } from './profile-actions'
import { actions as toasterActions } from '../toaster/toaster-actions'

export function* getProfile(action){
  try {
    const profile = yield call([UserApi, UserApi.getUser], action.id);
    yield put(actions.getProfileSuccess(profile));
  } catch (e) {
    yield put(toasterActions.addToast("error", "Ocorreu um erro ao recuperar seu perfil"))
  }
}

export function* updateProfile(action){
  try{
    yield call([UserApi, UserApi.alter], action.id, action.data)
    yield put(actions.updateProfieSuccess())
    yield put(actions.getProfile(action.id))
  }catch(e){
    yield put(toasterActions.addToast("error", "Não foi possível atualizar as informações! :("))
  }
}

export default function* root(){
  yield all([
    takeEvery(types.GET_PROFILE, getProfile),
    takeEvery(types.UPDATE_PROFILE, updateProfile)
  ])
}