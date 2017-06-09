import {
  OPEN_EDIT_MODAL,
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_MODAL,
  DELETE_CONTACT,
  CHANGE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
  CHANGE_PAGE,
} from './types';
import {
  deleteContactFunction,
  updateContactFunction,
  addContactFunction,
  getContactsOnPage,
  getCurrentContact,
  checkCurrentPageNumber,
  validate,
  validateAll,
  totalValidation,
} from '../reducers';

export const changePage = (page) => (dispatch, getState) => {
  const allContacts = getState();
  const currentContacts = getContactsOnPage(allContacts.contactList, page);

  dispatch({
    type: CHANGE_PAGE,
    payload: { currentContacts, page },
  });
};

export const openEditModal = (contact) => {
  const validation = validateAll(contact);

  return {
    type: OPEN_EDIT_MODAL,
    payload: { contact, validation },
  };
};

export const openAddModal = (contact) => {
  const validation = validateAll(contact);

  return {
    type: OPEN_ADD_MODAL,
    payload: { contact, validation },
  };
};

export const openDeleteModal = (contact) => {
  return {
    type: OPEN_DELETE_MODAL,
    payload: { contact },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const deleteContact = (page) => (dispatch, getState) => {
  const updatedContactList = deleteContactFunction(getState(), getCurrentContact(getState()));
  const currentPage = checkCurrentPageNumber(updatedContactList, page);
  const currentContacts = getContactsOnPage(updatedContactList, currentPage);

  dispatch({
    type: DELETE_CONTACT,
    payload: { updatedContactList, currentContacts, currentPage },
  });
};

export const changeContact = (field, value) => {
  const validation = validate(field, value);

  return {
    type: CHANGE_CONTACT,
    payload: { field, value, validation },
  };
};

export const updateContact = (page) => (dispatch, getState) => {
  const validate = totalValidation(getState());
  const updatedContactList = updateContactFunction(getState(), getCurrentContact(getState()));
  const currentContacts = getContactsOnPage(updatedContactList, page);

  if (validate) {
    dispatch({
      type: UPDATE_CONTACT,
      payload: { updatedContactList, currentContacts },
    });
  };
};

export const addContact = (page) => (dispatch, getState) => {
  const validate = totalValidation(getState());
  const updatedContactList = addContactFunction(getState(), getCurrentContact(getState()));
  const currentContacts = getContactsOnPage(updatedContactList, page);

  if (validate) {
    dispatch({
      type: ADD_CONTACT,
      payload: { updatedContactList, currentContacts },
    });
  };
};
