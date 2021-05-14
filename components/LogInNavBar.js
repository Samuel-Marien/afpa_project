import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const LogInNavBar = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="m-0 py-0"
        expand="lg"
        style={{ opacity: '.9' }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#">
              <p>Pro Id Setting</p>
            </Nav.Link>
            <Nav.Link href="/settingStudentPage">
              <p>Networks</p>
            </Nav.Link>
            <Nav.Link href="/settingStudentPage">
              <p>Directories</p>
            </Nav.Link>
            <Nav.Link href="/settingStudentPage">
              <p>Community</p>
            </Nav.Link>
            <Nav.Link href="/settingStudentPage">
              <p>Jobs</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default LogInNavBar
