import {
  DELETE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
} from '../actions/types';

const INIT_STATE = [
  {
    id: '1',
    name: 'Bob',
    surname: 'Basset',
    email: 'bob@example.com',
    phone: '3055566633'
  },
  {
    id: '2',
    name: 'Chuck',
    surname: 'Norris',
    email: 'chuck@example.com',
    phone: '3077799933'
  },
  {
    id: '3',
    name: 'Tim',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '4',
    name: 'Bofur',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '5',
    name: 'Bifur',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '6',
    name: 'Gloin',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '7',
    name: 'Dvalin',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '8',
    name: 'Balin',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '9',
    name: 'Took',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '10',
    name: 'Dook',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '11',
    name: 'Book',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },
  {
    id: '12',
    name: 'Hook',
    surname: 'Cook',
    email: 'tim@example.com',
    phone: '3044422233'
  },

];

const contactList = (state = INIT_STATE, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
    case UPDATE_CONTACT:
    case ADD_CONTACT:
      return action.payload.updatedContactList;
    default:
      return state;
  }
};

export const deleteContact = (state, deletedContact) => {
  return [...state.filter(contact => contact.id !== deletedContact.id)];
};

export const updateContact = (state, updatedContact) => {
  return [...state.map(contact => {
    return contact.id !== updatedContact.id ? contact : updatedContact;
  })];
};

export const addContact = (state, addedContact) => {
  return [...state, addedContact];
};

export default contactList;
