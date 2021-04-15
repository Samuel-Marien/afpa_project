import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import NavBar2 from '../components/NavBar2'

const NewPswd = (props) => {
  return (
    <PageHorizontal
      title="New password"
      pageTitle=""
      imgUrl="/tools-5669031_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>
      <div className="bg-light p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          New password
        </div>
        <h5>Your new password must be different from the previous one</h5>
        <Form className="shadow p-3 rounded mt-3">
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="New password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm" />
          </Form.Group>
          <Button variant="info" type="submit" className=" mt-2 w-100">
            Submit
          </Button>
        </Form>
      </div>
    </PageHorizontal>
  )
}

export default NewPswd
