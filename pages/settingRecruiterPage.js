import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconRecruiter from '../components/CircleIconRecruiter'
import SettingForm from '../components/SettingForm'
import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

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
      <div className="mt-5 pt-5">
        <NavBarPageHorizontal />
      </div>
      <CircleIconRecruiter />
      <SettingForm>
        <OptionForm />
      </SettingForm>
    </PageHorizontal>
  )
}

export default RecruiterInscription
