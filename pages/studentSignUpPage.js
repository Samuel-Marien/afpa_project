import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import NavBar from '../components/NavBar'
import SignUpForm from '../components/SignUpForm'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const OptionForm = () => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col xs={12} sm={6}>
          <Form.Control placeholder="Afpa center*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Afpa Center.
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Speciality*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Speciality.
          </Form.Control.Feedback>
        </Col>
      </Form.Row>
      <Form.Row className="mt-2">
        <Col xs={12} sm={6}>
          <Form.Control
            as="select"
            id="inlineFormStatusSelect"
            className="text-secondary"
            required
          >
            <option value="0">Status...</option>
            <option value="1">New student</option>
            <option value="2">former students</option>
            <option value="3">Tourist</option>
          </Form.Control>

          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Status.
          </Form.Control.Feedback>
        </Col>
      </Form.Row>
    </div>
  )
}

const StudentInscription = () => {
  return (
    <PageHorizontal title="Student Inscription" imgUrl="/students.jpg">
      <div className="mt-5 pt-5">
        <NavBar />
      </div>
      <div className="bg-transaparent p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Sign Up
        </div>
        <SignUpForm>
          <OptionForm />
        </SignUpForm>
      </div>
    </PageHorizontal>
  )
}

export default StudentInscription
