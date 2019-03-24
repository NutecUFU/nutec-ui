export const types = {
  GET_PROFILE: "GET_PROFILE",
  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  UPDATE_PROFILE: "UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS: "UPDATE_PROFILE_SUCCESS"
}

export const actions = {
  getProfile: (id) => ({type: types.GET_PROFILE, id}),
  getProfileSuccess: (profile) => ({type: types.GET_PROFILE_SUCCESS, profile}),
  updateProfie: (id, data) => ({type: types.UPDATE_PROFILE, id, data}),
  updateProfieSuccess: () => ({type: types.UPDATE_PROFILE_SUCCESS})
}