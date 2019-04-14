import { put, call, takeEvery, all } from 'redux-saga/effects'
import { LandingAPI } from 'core/api/landing';
import { LandingActions, LandingTypes } from './action';


export function* getExperiments(){
  try {
    const experiments = yield call([LandingAPI, LandingAPI.getExperiments])
    yield put(LandingActions.experimentsLoaded(experiments.results))
  } catch (e) {
    console.log(e)
  }
}

export default function* root(){
  yield all([
    takeEvery(LandingTypes.LOAD_EXPERIMENTS, getExperiments)
  ])
}