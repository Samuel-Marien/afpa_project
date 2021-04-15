import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import NavBar from '../components/NavBar'

const Forgotpswd = (props) => {
  return (
    <PageHorizontal title="forgot password" imgUrl="/tools-5669031_1920.jpg">
      <div className="mt-5 pt-5">
        <NavBar />
      </div>
      <div className="bg-light p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Forgot password ?
        </div>
        <div>
          <h5 className="mt-3">
            Enter the email address associated with your account
          </h5>
          <Form className="shadow p-3 rounded mt-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="info" type="submit" className=" mt-2 w-100">
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
      </div>
    </PageHorizontal>
  )
}

export default Forgotpswd
