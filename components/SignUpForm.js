import { React, useState } from 'react'
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const SignUpForm = (props) => {
  const { children } = props
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <div className="text-center">
      <a href="#" className="text-info" style={{ fontSize: '.8rem' }}>
        change your avatar
      </a>
      <Form
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
        className="w-75 m-auto shadow rounded bg-light p-2"
      >
        <Form.Row className="mt-1">
          <Col>
            <Form.Control placeholder="First name*" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid First name.
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control placeholder="Last name*" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid Last name.
            </Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Form.Row className="mt-2">
          <Col>
            <Form.Control type="email" placeholder="Enter email*" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Control type="tel" placeholder="Number phone" />
          </Col>
        </Form.Row>
        {children}
        <Form.Group className="mt-4 mb-0 d-flex justify-content-between">
          <Form.Group
            className="d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Control
              type="password"
              placeholder="Password*"
              className="w-100"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid" className="p-1">
              Your password must be between 8 and 30 characters, one digit and
              one special character..
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="d-flex flex-column"
            controlId="formBasicConfirmPassword"
          >
            <Form.Control
              type="password"
              placeholder="Confirm password*"
              className="w-100"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid" className="p-1">
              your confirmation password must be the same as your password
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Group>
        <p className="w-100 text-center" style={{ fontSize: '.7rem' }}>
          Your password must be between 8 and 30 characters, one digit and one
          special character.
        </p>

        <Form.Check
          required
          name="terms"
          label="Agree to terms and conditions"
          className="mt-5"
          style={{ fontSize: '.8rem' }}
        />
        <p className="mt-2" style={{ fontSize: '.7rem' }}>
          By checking &aposAgree to terms and conditions&apos, you agree to ours
          terms and that you have read our Data Policy, incuding our Cookies
          Use.
        </p>
        <Button variant="secondary" type="submit" className="w-100 mt-2 mb-2">
          Submit
        </Button>
      </Form>
    </div>
  )
}

SignUpForm.propTypes = {
  children: PropTypes.node
}
export default SignUpForm
