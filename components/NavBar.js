import React from 'react';

import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import Logo from './Logo';
import SignButton from './SignButton';
import MyModal from './MyModal';

import { IoIosMail, IoIosSettings } from 'react-icons/io';

const NavBar = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="m-0 py-0"
      expand="lg"
      fixed="top"
      style={{ opacity: '.9' }}
    >
      <Navbar.Brand>
        <Logo size="45" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Nav.Link href="#features">
            <IoIosMail size={25} />
          </Nav.Link>
          <Nav.Link href="/settingStudentPage">
            <IoIosSettings size={25} className="text-info" />
          </Nav.Link>
        </Nav>

        <Form inline>
          <MyModal show={modalShow} onHide={() => setModalShow(false)} />
          <SignButton
            // href={'/selectRolePage'}
            href="#"
            variant={'outline-info'}
            className={'mr-3 p-1'}
            onClick={() => setModalShow(true)}
          >
            Sign Up
          </SignButton>
          <SignButton
            href={'/SignIn'}
            variant={'outline-secondary'}
            className={'p-1'}
          >
            Sign In
          </SignButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
