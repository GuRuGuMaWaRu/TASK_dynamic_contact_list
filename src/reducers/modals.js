import { combineReducers } from 'redux';

import {
  OPEN_EDIT_MODAL,
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_MODAL,
  DELETE_CONTACT,
  CHANGE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from '../actions/types';

const INIT_SHOW_STATE = {
  showEditModal: false,
  showAddModal: false,
  showDeleteModal: false,
};

const INIT_VALIDATE_STATE = {
  name: 'error',
  surname: 'error',
  email: 'error',
  phone: 'error',
};

const modals = () => {

  const showModals = (state = INIT_SHOW_STATE, action) => {
    switch (action.type) {
      case OPEN_EDIT_MODAL:
        return {
          ...state,
          showEditModal: true,
        };
      case OPEN_ADD_MODAL:
        return {
          ...state,
          showAddModal: true,
        }
      case OPEN_DELETE_MODAL:
        return {
          ...state,
          showDeleteModal: true,
        };
      case CLOSE_MODAL:
      case DELETE_CONTACT:
      case UPDATE_CONTACT:
      case ADD_CONTACT:
        return {
          ...state,
          showDeleteModal: false,
          showEditModal: false,
          showAddModal: false,
        };
      default:
        return state;
    }
  };

  const validateForms = (state = INIT_VALIDATE_STATE, action) => {
    switch (action.type) {
      case OPEN_EDIT_MODAL:
      case OPEN_ADD_MODAL:
        return action.payload.validation;
      case CHANGE_CONTACT:
        return {
          ...state,
          [action.payload.field]: action.payload.validation,
        };
      default:
        return state;
    }
  };

  return combineReducers({
    showModals,
    validateForms,
  });

};

export const validate = (field, value) => {
  switch (field) {
    case 'id':
      return 'success';
    case 'name':
      return value.length < 1 ? 'error' : 'success';
    case 'surname':
      return value.length < 1 ? 'error' : 'success';
    case 'phone':
      return /^(\+)?(\d+)$/.test(value) ? 'success' : 'error';
    case 'email':
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ? 'success'
        : 'error';
    default:
      return 'error';
  }
};

export const validateAll = (contact) => {
  const fields = Object.keys(contact);

  return fields.reduce((object, field) => {
    return Object.assign(object, {[field]: validate(field, contact[field])})
  }, {});
};

export const totalValidation = (validationObject) => {
  const fields = Object.keys(validationObject);

  return fields.every(field => {
    return validationObject[field] === 'success';
  });
};

export default modals;
