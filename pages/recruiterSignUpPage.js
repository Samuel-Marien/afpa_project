import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
// import CircleIconRecruiter from '../components/CircleIconRecruiter'
import SignUpForm from '../components/SignUpForm'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col>
          <Form.Control placeholder="Company*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Company.
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Current Job*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Job.
          </Form.Control.Feedback>
        </Col>
      </Form.Row>
      {/* <Form.Row className="mt-2">
        <Col className="col-3">
          <Form.Control type="number" placeholder="Age" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Col>
        <Col className="col-3">
          <Form.Control
            as="select"
            id="inlineFormGenderSelect"
            className="text-secondary"
          >
            <option value="0">Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Heu wait...</option>
          </Form.Control>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Gender.
          </Form.Control.Feedback>
        </Col>
      </Form.Row> */}
    </div>
  )
}

const RecruiterInscription = (props) => {
  return (
    <PageHorizontal
      title="Recruiter Inscription"
      pageTitle="Sign Up"
      imgUrl="/writing-1149962_1920.jpg"
    >
      {/* <CircleIconRecruiter /> */}
      <SignUpForm>
        <OptionForm />
      </SignUpForm>
    </PageHorizontal>
  )
}

export default RecruiterInscription
