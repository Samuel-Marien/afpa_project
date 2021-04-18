import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import NavBar from '../components/NavBar'
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
    </div>
  )
}

const RecruiterInscription = (props) => {
  return (
    <PageHorizontal
      title="Recruiter Inscription"
      imgUrl="/writing-1149962_1920.jpg"
    >
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

export default RecruiterInscription
