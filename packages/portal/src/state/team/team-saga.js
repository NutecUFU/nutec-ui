import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './team-actions'
import TeamApi from '../../api/team'

import { actions as toasterActions} from '../toaster/toaster-actions'


export function* getTeam(){
  try {
    const team = yield call([TeamApi, TeamApi.getAll])
    yield put(actions.getTeamSucess(team))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar nossa equipe! :('))
  }
}


export default function* root() {
  yield all([
    takeEvery(types.GET_TEAM, getTeam)
  ])
}