import React from 'react'
import PropTypes from 'prop-types'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'

import Logo from './Logo'
import LogOutBut from './LogOutBut'
import ProfilCircleIcon from './ProfilCircleIcon'

import {
  IoIosMail,
  IoIosPeople,
  IoIosBriefcase,
  IoIosContacts,
  IoIosBulb
} from 'react-icons/io'

const MyLink = (props) => {
  const { href, text, className = 'mb-0', children } = props
  return (
    <Nav.Link href={href}>
      <p className={className}>
        {children}
        <span style={{ fontSize: '.8rem' }}>{text}</span>
      </p>
    </Nav.Link>
  )
}

MyLink.propTypes = {
  href: PropTypes.string
}
MyLink.propTypes = {
  icon: PropTypes.object
}
MyLink.propTypes = {
  text: PropTypes.string
}
MyLink.propTypes = {
  className: PropTypes.string
}
MyLink.propTypes = {
  children: PropTypes.node
}

const NavBar2 = (props) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="m-0 py-0"
      expand="sm"
      fixed="top"
      style={{ opacity: '.9' }}
    >
      <Navbar.Brand>
        <Logo size="45" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <MyLink href={'/messagePage'}>
            <IoIosMail size={25} />
          </MyLink>
          <MyLink href={'/jobOfferPage'}>
            <IoIosBriefcase size={25} />
          </MyLink>
          <MyLink
            className={'mb-0 ml-5'}
            href={'/settingStudentPage'}
            text={'Networks'}
          >
            <IoIosContacts size={25} />
          </MyLink>
          <MyLink href={'/directoryPage'} text={'People'}>
            <IoIosPeople size={25} />
          </MyLink>
          <MyLink href={'/settingStudentPage'} text={'Group'}>
            <IoIosBulb size={25} />
          </MyLink>
        </Nav>

        <Dropdown drop={'down'}>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="dark"
            size="sm"
          ></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header href="#">
              <div className="font-weight-bold">Signed in as</div>
              <div className="text-info">John Doe</div>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item href="/settingStudentPage">
              General Setting
            </Dropdown.Item>
            <Dropdown.Item href="/studentIdPage">
              Profil ID Setting
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3" className="d-flex">
              Log out
              <LogOutBut />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="#" className="m-0 p-0">
          <ProfilCircleIcon src={'/portraits/male-5.jpg'} />
        </Nav.Link>
        <Nav.Link href="#">
          <LogOutBut />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar2
