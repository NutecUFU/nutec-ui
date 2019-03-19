export const DashboardTypes = {
  'SET_NAME': 'DASHBOARD/SET_NAME',
  'USER_JOIN': 'DASHBOARD/USER_JOIN',
  'USER_LIST': 'DASHBOARD/USER_LIST',
}

export const DashboardActions = {
  setTitle: title => ({ type: DashboardTypes.SET_NAME, title }),
  userJoin: user => ({type: DashboardTypes.USER_JOIN, user}),
  userList: users => ({type: DashboardTypes.USER_LIST, users}),
}
