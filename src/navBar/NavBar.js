import React from 'react';
import './NavBar.css';
import Logo from './logo.jpeg';
import {Navbar, Container} from 'react-bootstrap'

function NavBar() {
  return (
    <div className='NavBar'>
      <Navbar>
        <Container>
          <Navbar.Brand>
              <img
              alt="logo"
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              />{' '}
              <span>من ايدي لايدك </span>
          </Navbar.Brand>
        </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;
