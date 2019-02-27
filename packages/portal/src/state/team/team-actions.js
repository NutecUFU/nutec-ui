export const types = {
  GET_TEAM: 'GET_TEAM',
  GET_TEAM_SUCCESS: 'GET_SUCCESS'
}

export const actions = {
  getTeam: () => ({type: types.GET_TEAM}),
  getTeamSucess: (team) => ({type: types.GET_TEAM_SUCCESS, team})
}