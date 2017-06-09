import React from 'react';
import { Panel } from 'react-bootstrap';

import ContactList from './ContactList';
import ListControls from './ListControls';
import '../style/global.css';
import '../style/media.css';

const App = ({ contacts }) => {
  return (
    <Panel className="contacts">
      <ContactList />
      <ListControls />
    </Panel>
  );
};

export default App;
