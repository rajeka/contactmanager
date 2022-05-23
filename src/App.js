import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import NotFound from './components/pages/NotFound';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { findByPlaceholderText } from '@testing-library/react';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contact/add" element={<AddContact />} />
                <Route
                  exact
                  path="/contact/edit/:id"
                  element={<EditContact />}
                />
                <Route exact path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
