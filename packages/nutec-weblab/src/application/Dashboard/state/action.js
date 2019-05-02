export const DashboardTypes = {
  SET_NAME: 'DASHBOARD/SET_NAME',
  ACTIVE: 'DASHBOARD/ACTIVE',
  SET_USER: 'DASHBOARD/SET_USER',
  START: 'DASHBOARD/START',
  LIST_USER: 'DASHBOARD/LIST_USER',
  ADD_USER: 'DASHBOARD/ADD_USER'
}

export const DashboardActions = {
  setTitle: title => ({ type: DashboardTypes.SET_NAME, title }),
  setActive: status => ({ type: DashboardTypes.ACTIVE, status }),
  setUserData: user => ({ type: DashboardTypes.SET_USER, user }),
  startClassroom: start => ({ type: DashboardTypes.START, start }),
  listUser: users => ({ type: DashboardTypes.LIST_USER, users }),
  addUser: user => ({ type: DashboardTypes.ADD_USER, user })
}
