import { combineReducers } from 'redux';

import contacts from './contacts';
import modals from './modals';
import contactList from './contactList';
import * as fromContactListReducer from './contactList';
import * as fromContactsReducer from './contacts';
import * as fromModalsReducer from './modals';

const rootReducer = combineReducers({
  contactList: contactList,
  contacts: contacts(),
  modals: modals(),
});

export const deleteContactFunction = (state, deletedContact) => {
  return fromContactListReducer.deleteContact(state.contactList, deletedContact);
};

export const updateContactFunction = (state, updatedContact) => {
  return fromContactListReducer.updateContact(state.contactList, updatedContact);
};

export const addContactFunction = (state, addedContact) => {
  return fromContactListReducer.addContact(state.contactList, addedContact);
};

export const getContactsOnPage = (contactList, page) => {
  return fromContactsReducer.getContactsOnPage(contactList, page);
};

export const checkCurrentPageNumber = (contactList, page) => {
  return fromContactsReducer.checkCurrentPageNumber(contactList.length, page);
}

export const getCurrentContact = (state) => {
  return fromContactsReducer.getCurrentContact(state.contacts);
};

export const validate = (field, value) => {
  return fromModalsReducer.validate(field, value);
};

export const validateAll = (contact) => {
  return fromModalsReducer.validateAll(contact);
};

export const totalValidation = (state) => {
  return fromModalsReducer.totalValidation(state.modals.validateForms);
};

export default rootReducer;
