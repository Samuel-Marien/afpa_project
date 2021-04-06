import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

import Logo from './Logo'
import SignButton from './SignButton'
import DevTool from './DevTool'

import { IoIosMail, IoIosSettings, IoIosLogOut } from 'react-icons/io'

const NavBar = (props) => {
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
          <Nav.Link href="#">
            <IoIosMail size={25} />
          </Nav.Link>
          <Nav.Link href="/settingStudentPage">
            <IoIosSettings size={25} className="text-info" />
          </Nav.Link>
        </Nav>

        <Form inline>
          <DevTool />
          <SignButton
            href="/selectRolePage"
            variant={'outline-info'}
            className={'mr-3 p-1'}
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
          <Nav.Link href="/settingStudentPage">
            <IoIosLogOut size={25} className="text-danger ml-4" />
          </Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
