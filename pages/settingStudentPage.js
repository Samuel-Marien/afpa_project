import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconStudent from '../components/CircleIconStudent'
import SettingForm from '../components/SettingForm'
import NavBar2 from '../components/NavBar2'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col xs={12} sm={6}>
          <Form.Control placeholder="Afpa center" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Afpa Center.
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Speciality" />
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

const StudentInscription = (props) => {
  return (
    <PageHorizontal title="Student setting" imgUrl="/students.jpg">
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>
      <div className="bg-transparent p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Settings
        </div>
        <CircleIconStudent />
        <SettingForm>
          <OptionForm />
        </SettingForm>
      </div>
    </PageHorizontal>
  )
}

export default StudentInscription
