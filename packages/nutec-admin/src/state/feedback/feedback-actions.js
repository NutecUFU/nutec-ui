export const types = {
  ADD_FEEDBACK: 'ADD_FEEDBACK',
  ADD_FEEDBACK_SUCCESS: 'ADD_FEEDBACK_SUCCESS'
}

export const actions = {
  addFeedback: (feedback) => ({type: types.ADD_FEEDBACK, feedback}),
  addFeedbackSuccess: () => ({type: types.ADD_FEEDBACK_SUCCESS})
}

