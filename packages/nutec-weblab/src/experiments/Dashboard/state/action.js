export const DashboardTypes = {
  'SET_NAME': 'DASHBOARD/SET_NAME'
}

export const DashboardActions = {
  setTitle: title => ({ type: DashboardTypes.SET_NAME, title })
}
