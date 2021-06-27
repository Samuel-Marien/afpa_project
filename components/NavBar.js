import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'

import Logo from './Logo'
import SignButton from './SignButton'
import DevTool from './DevTool'
import LogOutBut from './LogOutBut'
import RoleModal from './RoleModal'

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="mb-2 py-0"
      expand="lg"
      fixed="top"
      style={{ opacity: '.9' }}
    >
      <Navbar.Brand>
        <Logo size="45" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Form inline className="d-flex  align-items-start">
          <DevTool />
          <SignButton
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
          <Nav.Link href="#">
            <LogOutBut />
          </Nav.Link>
        </Form>
        <RoleModal show={modalShow} onHide={() => setModalShow(false)} />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
