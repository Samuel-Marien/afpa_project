import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

const ReinitPaswd = (props) => {
  return (
    <PageHorizontal
      title="Reset password"
      pageTitle="Reset password"
      imgUrl="/tools-5669031_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBarPageHorizontal />
      </div>
      <div>
        <h5>Your new password must be different from the previous one</h5>
        <Form className="shadow p-3 rounded mt-3">
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Actual password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-5">
            <Form.Control type="password" placeholder="New password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm" />
          </Form.Group>
          <Button variant="secondary" type="submit" className=" mt-2 w-100">
            Submit
          </Button>
        </Form>
      </div>
    </PageHorizontal>
  )
}

export default ReinitPaswd
