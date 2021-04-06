import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconTeacher from '../components/CircleIconTeacher'
import SettingForm from '../components/SettingForm'
import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col>
          <Form.Control placeholder="Afpa center" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Afpa Center.
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Speciality" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Speciality.
          </Form.Control.Feedback>
        </Col>
      </Form.Row>
    </div>
  )
}

const TeacherInscription = (props) => {
  return (
    <PageHorizontal
      title="Teacher setting"
      pageTitle="Setting"
      imgUrl="/startup-593341_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBarPageHorizontal />
      </div>
      <CircleIconTeacher />
      <SettingForm>
        <OptionForm />
      </SettingForm>
    </PageHorizontal>
  )
}

export default TeacherInscription
