import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ButtonToolbar,
  Button,
  Modal
} from 'react-bootstrap';
import { v4 } from 'node-uuid'; // generate random id

import AddContact from './AddContact';
import * as actions from '../actions';
import '../style/listControls.css';

class ListControls extends Component {
  componentWillMount() {
    this.props.changePage(this.props.currentPage);
  }

  render() {
    const {
      contacts,
      showAddModal,
      currentPage,
      openAddModal,
      closeModal,
      changePage,
    } = this.props;
    const pagesNumber = Math.ceil(contacts.length/10);
    const pagesList = [];
    const contact = {
      id: v4(),
      name: '',
      surname: '',
      email: '',
      phone: ''
    };

    for (let i = 1; i <= pagesNumber; i++) {
      pagesList.push(
        <Button
          key={i}
          className={currentPage === i ? 'selected' : ''}
          onClick={() => changePage(i)}>
          {i}
        </Button>
      );
    }

    return (
      <div id="list-controls">
        <ButtonToolbar>
          {pagesList}
          <Button
            bsStyle="success"
            className="contact-button"
            onClick={() => openAddModal(contact)}>
            <i className="fa fa-pencil" aria-hidden="true"></i> Add Contact
          </Button>
        </ButtonToolbar>

        <Modal show={showAddModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddContact />
          </Modal.Body>
        </Modal>

      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactList,
  currentPage: state.contacts.currentPage,
  showAddModal: state.modals.showModals.showAddModal,
});

ListControls = connect(
  mapStateToProps,
  actions
)(ListControls);

export default ListControls;
