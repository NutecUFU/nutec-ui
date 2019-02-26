export const types = {
	TOGGLE_TOAST: 'TOGGLE_TOAST',
  ADD_TOAST: 'ADD_TOAST'
}

export const actions = {
  addToast: (typeToast, msg) => ({type: types.ADD_TOAST, typeToast, msg}),
  toggleToast: (typeToast, msg) => ({type: types.TOGGLE_TOAST, typeToast, msg})
}