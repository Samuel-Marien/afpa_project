import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconRecruiter from '../components/CircleIconRecruiter'
import SettingForm from '../components/SettingForm'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col>
          <Form.Control placeholder="Company" />
        </Col>
        <Col>
          <Form.Control placeholder="Current Job" />
        </Col>
      </Form.Row>
      {/* <Form.Row className="mt-2">
        <Col className="col-3">
          <Form.Control type="number" placeholder="Age" />
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
        </Col>
      </Form.Row> */}
    </div>
  )
}

const RecruiterInscription = (props) => {
  return (
    <PageHorizontal
      title="Recruiter setting"
      pageTitle="Setting"
      imgUrl="/writing-1149962_1920.jpg"
    >
      <CircleIconRecruiter />
      <SettingForm>
        <OptionForm />
      </SettingForm>
    </PageHorizontal>
  )
}

export default RecruiterInscription
