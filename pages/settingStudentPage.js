import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconStudent from '../components/CircleIconStudent'
import SettingForm from '../components/SettingForm'
import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col>
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
        <Col className="col-4">
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
    <PageHorizontal
      title="Student setting"
      pageTitle="Setting"
      imgUrl="/students.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBarPageHorizontal />
      </div>
      <CircleIconStudent />
      <SettingForm>
        <OptionForm />
      </SettingForm>
    </PageHorizontal>
  )
}

export default StudentInscription
