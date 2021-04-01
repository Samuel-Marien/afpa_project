import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Forgotpswd = (props) => {
  return (
    <PageHorizontal
      title="forgot password"
      pageTitle="Forgot password ?"
      imgUrl="/people-2583442_1920.jpg"
    >
      <div>
        <h5 className="mt-3">
          Enter the email address associated with your account
        </h5>
        <Form className="shadow p-3 rounded mt-3">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button variant="secondary" type="submit" className=" mt-2 w-100">
            Submit
          </Button>
        </Form>
      </div>
      <div className="shadow p-3 rounded mt-5 d-flex flex-column align-items-center">
        <h5>Enter The 4 digits sent to: </h5>
        <h6>john.doe@foobar.com</h6>
        <Form.Group
          controlId="formBasicPassword"
          className="d-flex flex-column align-items-center mt-3"
        >
          <Form.Control
            type="password"
            placeholder="secret digit"
            className="w-50"
          />
        </Form.Group>
        <Button variant="secondary" type="submit" className="mt-2 w-100">
          Submit
        </Button>
      </div>
    </PageHorizontal>
  )
}

export default Forgotpswd
