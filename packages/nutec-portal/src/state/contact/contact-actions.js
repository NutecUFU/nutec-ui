export const types = {
  CREATE_CONTACT: 'CREATE_CONTACT',
  CREATE_CONTACT_SUCCESS: 'CREATE_CONTACT_SUCCESS'
}

export const actions = {
  createContact: (data) => ({type: types.CREATE_CONTACT, data}),
  createContactSuccess: () => ({type: types.CREATE_CONTACT_SUCCESS})
}