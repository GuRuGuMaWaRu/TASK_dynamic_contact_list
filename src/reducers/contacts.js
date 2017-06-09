import { combineReducers } from 'redux';

import {
  OPEN_EDIT_MODAL,
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
  CHANGE_CONTACT,
  CHANGE_PAGE,
} from '../actions/types';

const contacts = () => {

  const currentContacts = (state = [], action) => {
    switch (action.type) {
      case CHANGE_PAGE:
      case DELETE_CONTACT:
      case UPDATE_CONTACT:
      case ADD_CONTACT:
        return action.payload.currentContacts
      default:
        return state;
    }
  };

  const currentContact = (state = {}, action) => {
    switch (action.type) {
      case OPEN_EDIT_MODAL:
      case OPEN_DELETE_MODAL:
      case OPEN_ADD_MODAL:
        return action.payload.contact;
      case DELETE_CONTACT:
        return {};
      case CHANGE_CONTACT:
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      default:
        return state;
    }
  };

  const currentPage = (state = 1, action) => {
    switch (action.type) {
      case CHANGE_PAGE:
        return action.payload.page;
      case DELETE_CONTACT:
        return action.payload.currentPage;
      default:
        return state;
    }
  };

  return combineReducers({
    currentContacts,
    currentContact,
    currentPage,
  });
}

export const getCurrentContact = state => state.currentContact;

export const getContactsOnPage = (allContacts, page) => {
  return allContacts.filter((contact, index) => {
    return Math.ceil((index+1)/10) === page;
  });
};

export const checkCurrentPageNumber = (allContacts, page) => {
  const totalPages = Math.ceil(allContacts/10);

  return page > totalPages ? totalPages : page;
};

export default contacts;
