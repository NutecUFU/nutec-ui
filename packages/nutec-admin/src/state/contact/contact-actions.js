export const types = {
  GET_ALL_CONTACTS: 'GET_ALL_CONTACTS',
  GET_ALL_CONTACTS_SUCCESS: 'GET_ALL_CONTACTS_SUCCESS',
  DELETE_CONTACT: 'DELETE_CONTACT',
  DELETE_CONTACT_SUCCESS: 'DELETE_CONTACT_SUCCESS'
}

export const actions = {
  getAllContacts: () => ({type: types.GET_ALL_CONTACTS}),
  getAllContactsSuccess: (contacts) => ({type: types.GET_ALL_CONTACTS_SUCCESS, contacts}),
  deleteContact: (id) => ({type: types.DELETE_CONTACT, id}),
  deleteContactSuccess: () => ({type: types.DELETE_CONTACT_SUCCESS})
}