import axios from 'axios';
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      // console.log(state);
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.paylod
        ),
      };
    case 'ADD_CONTAT':
      return {
        ...state,
        contacts: [action.paylod, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'John Doe',
      //   email: 'jdoe@mail.com',
      //   phone: '555-555-5555',
      // },
      // {
      //   id: 2,
      //   name: 'Barry Manalo',
      //   email: 'bmanalo@mail.com',
      //   phone: '453-555-5555',
      // },
      // {
      //   id: 3,
      //   name: 'Henry Johonson',
      //   email: 'hjohnson@mail.com',
      //   phone: '123-555-5555',
      // },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({ contacts: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
