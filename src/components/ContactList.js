import React from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  ListGroupItem,
  ButtonToolbar,
  Button,
  Modal,
} from 'react-bootstrap';

import EditContact from './EditContact';
import * as actions from '../actions';
import '../style/contactList.css';


let ContactList = ({
  contacts,
  currentContact,
  currentContacts,
  currentPage,
  showDeleteModal,
  showEditModal,
  openDeleteModal,
  openEditModal,
  closeModal,
  deleteContact,
}) => {
  const contactList = currentContacts.map((contact, index) => {
    return (
      <ListGroupItem key={contact.id}>
        <div className="contact-upper">
          <div>{contact.name}, {contact.surname}</div>
          <div>Email: {contact.email}</div>
        </div>
        <div className="contact-lower">
          <div>Phone: {contact.phone}</div>
          <ButtonToolbar>
            <Button
              className="contact-button"
              onClick={() => openEditModal(contact)}>
              <i className="fa fa-pencil" aria-hidden="true"></i> Edit
            </Button>
            <Button
              bsStyle="danger"
              className="contact-button"
              onClick={() => openDeleteModal(contact)}>
              <i className="fa fa-trash" aria-hidden="true"></i> Delete
            </Button>
          </ButtonToolbar>
        </div>
      </ListGroupItem>
    );
  });

  return (
    <div>

      <ListGroup>
        {contactList}
      </ListGroup>

      <Modal show={showEditModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact />
        </Modal.Body>
      </Modal>


      <Modal show={showDeleteModal} onHide={closeModal}>
        <Modal.Header className="warning" closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">Are you sure you want to permanently delete this contact?</p>
          <ButtonToolbar id="dlt-btns" className="text-center">
            <Button bsStyle="warning" onClick={() => deleteContact(currentPage)}>Yes</Button>
            <Button onClick={closeModal}>No</Button>
          </ButtonToolbar>
        </Modal.Body>
      </Modal>

    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contactList,
  currentContact: state.contacts.currentContact,
  currentContacts: state.contacts.currentContacts,
  currentPage: state.contacts.currentPage,
  showEditModal: state.modals.showModals.showEditModal,
  showDeleteModal: state.modals.showModals.showDeleteModal,
});

ContactList = connect(
  mapStateToProps,
  actions
)(ContactList);

export default ContactList;
