export const DashboardTypes = {
  SET_NAME: 'DASHBOARD/SET_NAME',
  LIST_USER: 'DASHBOARD/LIST_USER',
  ADD_USER: 'DASHBOARD/ADD_USER'
}

export const DashboardActions = {
  setTitle: title => ({ type: DashboardTypes.SET_NAME, title }),
  listUser: users => ({ type: DashboardTypes.LIST_USER, users }),
  addUser: user => ({ type: DashboardTypes.ADD_USER, user })
}
