import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

import Logo from './Logo';
import SignButton from './SignButton';

import { IoIosMail, IoIosSettings } from 'react-icons/io';

const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="m-0 py-0">
      <Navbar.Brand>
        <Logo size="45" />
      </Navbar.Brand>
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
        <SignButton href={'/selectRolePage'} variant={'outline-info'}>
          Sign Up
        </SignButton>
        <SignButton href={'/SignIn'} variant={'outline-secondary'}>
          Sign In
        </SignButton>
      </Form>
    </Navbar>
  );
};

export default NavBar;
