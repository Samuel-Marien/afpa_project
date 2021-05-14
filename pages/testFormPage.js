/* eslint-disable multiline-ternary */
import React from 'react'

import { useFormik } from 'formik'

import PropTypes from 'prop-types'

import PageHorizontal from '../components/PageHorizontal'
import NavBar from '../components/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyAlert = (props) => {
  const { children } = props
  return (
    <div className="text-danger" style={{ fontSize: '.8rem' }}>
      {children}
    </div>
  )
}

MyAlert.propTypes = {
  children: PropTypes.node
}
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.phone) {
    errors.phone = 'Required'
  } else if (values.phone.length !== Number) {
    errors.phone = 'Must be number only'
  }
  if (!values.speciality) {
    errors.speciality = 'Required'
  } else if (values.speciality.length > 15) {
    errors.speciality = 'Must be 15 characters or less'
  } else if (values.speciality.length < 3) {
    errors.speciality = 'Must be 3 characters or more'
  }
  if (!values.center) {
    errors.center = 'Required'
  }

  if (!values.status) {
    errors.status = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  } else if (values.password.length < 3) {
    errors.password = 'Must be 3 characters or more'
  } else if (!/(?=.*[0-9])/.test(values.password)) {
    errors.password = 'Invalid password. Must contain one number.'
  }

  if (!values.terms) {
    errors.terms = 'You must accept the terms and conditions.'
  }
  return errors
}

const SignupFormValidate = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      speciality: '',
      center: '',
      status: '',
      password: '',
      terms: ''
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit} className="text-dark">
      <Row>
        <Col>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <MyAlert>{formik.errors.firstName}</MyAlert>
          ) : null}
        </Col>
        <Col>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? (
            <MyAlert>{formik.errors.lastName}</MyAlert>
          ) : null}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          {' '}
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <MyAlert>{formik.errors.email}</MyAlert>
          ) : null}
        </Col>
        <Col>
          <Form.Label htmlFor="phone">Phone</Form.Label>
          <Form.Control
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone ? (
            <MyAlert>{formik.errors.phone}</MyAlert>
          ) : null}
        </Col>
      </Row>
      <Row className="mt-3 ">
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Centre Afpa
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Evry Ris Orangis</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Stains</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Saint Ouen l&apos;Aumône
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">Paris Politzer</Dropdown.Item>
              <Dropdown.Item href="#/action-5">
                Paris Philippe Auguste
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6">Nanterre</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Meudon la Forêt</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Magnanville</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Lardy</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Elancourt SQY</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Gonesse</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Créteil</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Champs-sur-Marne</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Bernes sur Oise</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {formik.errors.center ? (
            <MyAlert>{formik.errors.center}</MyAlert>
          ) : null}
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-status">
              Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Teacher</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Recruiter</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Alumni Student</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {formik.errors.status ? (
            <MyAlert>{formik.errors.status}</MyAlert>
          ) : null}
        </Col>
        <Col xs={6}>
          <Form.Group as={Row} className="d-flex justify-content-between">
            <Form.Label htmlFor="speciality">Speciality</Form.Label>
            <Col xs={9}>
              <Form.Control
                id="speciality"
                name="speciality"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.speciality}
              />
              {formik.errors.speciality ? (
                <MyAlert>{formik.errors.speciality}</MyAlert>
              ) : null}
            </Col>
          </Form.Group>
        </Col>
      </Row>
      <div className="border-top border-bottom py-3 border-info mb-5">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="col-6"
        />
        {formik.errors.password ? (
          <MyAlert>{formik.errors.password}</MyAlert>
        ) : null}

        <Form.Check
          name="terms"
          onChange={formik.handleChange}
          value={formik.values.terms}
          label="Agree to terms and conditions"
          className="mt-3"
          style={{ fontSize: '.8rem' }}
        />
        <p className="mb-0" style={{ fontSize: '.7rem' }}>
          By checking &apos;Agree to terms and conditions&apos;, you agree to
          ours terms and that you have read our Data Policy, incuding our
          Cookies Use.
        </p>
        {formik.errors.terms ? <MyAlert>{formik.errors.terms}</MyAlert> : null}
      </div>
      <div className="d-flex justify-content-end">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

const TestPage = () => {
  return (
    <PageHorizontal
      title="Recruiter Inscription"
      imgUrl="/writing-1149962_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBar />
      </div>
      <div
        className="bg-light p-4 rounded shadow my-3 my-md-1"
        style={{ opacity: '.8' }}
      >
        <div className="w-100 d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Sign Up
        </div>
        <SignupFormValidate />
      </div>
    </PageHorizontal>
  )
}

export default TestPage
