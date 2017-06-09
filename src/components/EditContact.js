import React from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';

import * as actions from '../actions';

let EditContact = ({
  closeModal,
  changeContact,
  updateContact,
  currentContact,
  currentPage,
  validateName,
  validateSurname,
  validatePhone,
  validateEmail,
}) => {
  const handleChange = (event) => {
    changeContact(event.target.id, event.target.value);
  };

  return (
    <Form horizontal>
      <FormGroup controlId="name" validationState={validateName}>
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            value={currentContact.name}
            onChange={handleChange}>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup controlId="surname" validationState={validateSurname}>
        <Col componentClass={ControlLabel} sm={2}>
          Surname
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            value={currentContact.surname}
            onChange={handleChange}>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup controlId="phone" validationState={validatePhone}>
        <Col componentClass={ControlLabel} sm={2}>
          Phone
        </Col>
        <Col sm={10}>
          <FormControl
            type="text"
            value={currentContact.phone}
            onChange={handleChange}>
          </FormControl>
        </Col>
      </FormGroup>
      <FormGroup controlId="email" validationState={validateEmail}>
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl
            type="email"
            value={currentContact.email}
            onChange={handleChange}>
          </FormControl>
        </Col>
      </FormGroup>
      <ButtonToolbar>
        <Button
          bsStyle="success"
          onClick={() => updateContact(currentPage)}>Save</Button>
        <Button onClick={closeModal}>Close</Button>
      </ButtonToolbar>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  currentContact: state.contacts.currentContact,
  currentPage: state.contacts.currentPage,
  validateName: state.modals.validateForms.name,
  validateSurname: state.modals.validateForms.surname,
  validatePhone: state.modals.validateForms.phone,
  validateEmail: state.modals.validateForms.email,
});

EditContact = connect(
  mapStateToProps,
  actions
)(EditContact);

export default EditContact;
