import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar bg='light'>
        <Navbar.Brand href='/'>Dental Appointments</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link href='/'>List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
