import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-4">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map((c) => (
                <Contact key={c.id} contact={c} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
