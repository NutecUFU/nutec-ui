import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './partner-actions'
import { actions as toasterActions } from '../toaster/toaster-actions';
import PartnerApi from 'api/partner'

export function* getAllPartners() {
  try{
    const partners = yield call([PartnerApi, PartnerApi.getAll])
    yield put(actions.getAllPartnersSuccess(partners))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os experimentos!'))
  }
}

export function* getPartner(action){
  try {
    const partner = yield call([PartnerApi, PartnerApi.getPartner], action.id)
    yield put(actions.getPartnerSuccess(partner))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar o experimento!' + e))
  }
}

export function* createPartner(action) {
  try {
    yield call([PartnerApi, PartnerApi.create], action.dados)
    yield put(actions.createPartnerSuccess())
    yield call(getAllPartners)
    yield put(actions.toggleModalCreate());
    yield put(toasterActions.addToast('success', 'Experimento cadastrado :)'));
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível cadastrar o experimento :('))
  }
}

export function* deletePartner(action) {
  try {
    yield call([PartnerApi, PartnerApi.delete], action.id)
    yield call(getAllPartners)
    yield put(actions.deletePartnerSuccess())
    yield put(actions.toggleModalItem())
    yield put(toasterActions.addToast('success', 'Experimento deletado :)'))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível deletar o experimento :('))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.GET_ALL_PARTNERS, getAllPartners),
    takeEvery(types.GET_PARTNER, getPartner),
    takeEvery(types.CREATE_PARTNER, createPartner),
    takeEvery(types.DELETE_PARTNER, deletePartner)
  ])
}