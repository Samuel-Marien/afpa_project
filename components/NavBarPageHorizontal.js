import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Logo from './Logo'
import LogOutBut from './LogOutBut'

import { IoIosMail, IoIosSettings, IoIosHome } from 'react-icons/io'

const NavBarPageHorizontal = (props) => {
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
          <Nav.Link href="/">
            <IoIosHome size={25} />
          </Nav.Link>
          <Nav.Link href="/settingStudentPage">
            <IoIosSettings size={25} className="text-info" />
          </Nav.Link>
        </Nav>
        <Nav.Link href="#">
          <LogOutBut />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBarPageHorizontal
