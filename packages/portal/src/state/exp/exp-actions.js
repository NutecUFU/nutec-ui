export const types = {
  GET_ALL_EXP: 'GET_ALL_EXP',
  GET_ALL_EXP_SUCCESS: 'GET_ALL_EXP_SUCCESS'
}

export const actions = {
  getAllExp: () => ({type: types.GET_ALL_EXP}),
  getAllExpSuccess: (exps) => ({type: types.GET_ALL_EXP_SUCCESS, exps})
}