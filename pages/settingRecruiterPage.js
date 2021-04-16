import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconRecruiter from '../components/CircleIconRecruiter'
import SettingForm from '../components/SettingForm'
import NavBar2 from '../components/NavBar2'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col xs={12} sm={6}>
          <Form.Control placeholder="Company" />
        </Col>
        <Col>
          <Form.Control placeholder="Current Job" />
        </Col>
      </Form.Row>
    </div>
  )
}

const RecruiterInscription = (props) => {
  return (
    <PageHorizontal
      title="Recruiter setting"
      imgUrl="/writing-1149962_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>
      <div className="bg-transparent p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Settings
        </div>
        <CircleIconRecruiter />
        <SettingForm>
          <OptionForm />
        </SettingForm>
      </div>
    </PageHorizontal>
  )
}

export default RecruiterInscription
