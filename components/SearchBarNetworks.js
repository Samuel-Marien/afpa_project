import React from 'react'
import PropTypes from 'prop-types'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { BiSearchAlt } from 'react-icons/bi'

const BoardMessage = (props) => {
  const { totalContacts = 10, student = 6, teacher = 3, recruiter = 1 } = props

  return (
    <div className="container col-12 col-md-3 d-flex flex-wrap justify-content-between d-md-block shadow rounded border-left border-info">
      <div className="d-flex justify-content-between">
        <p>All my contacts</p>
        <p className="ml-2">{totalContacts}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Student</p>
        <p className="ml-2">{student}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Teacher</p>
        <p className="ml-2">{teacher}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Recruiter</p>
        <p className="ml-2">{recruiter}</p>
      </div>
    </div>
  )
}
BoardMessage.propTypes = {
  totalContacts: PropTypes.number
}
BoardMessage.propTypes = {
  student: PropTypes.number
}
BoardMessage.propTypes = {
  teacher: PropTypes.number
}
BoardMessage.propTypes = {
  recruiter: PropTypes.number
}

const SearchBarNetworks = (props) => {
  return (
    <div className="col-12 col-md-8 container container-fluid d-flex flex-column align-items-between justify-content-around flex-md-row mx-auto rounded shadow-sm text-light bg-dark p-4">
      <BoardMessage />

      <div className="ml-0 ml-md-4 shadow p-3 w-100 rounded border-left border-info">
        <h2>Your networks</h2>

        <InputGroup className="mb-3 mt-3">
          <FormControl
            className="col-12"
            placeholder="What are you looking for?"
          />
          <InputGroup.Append>
            <Button className="" type="submit" variant="outline-info">
              <BiSearchAlt role="button" />
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup className="d-flex justify-content-between align-items-start p-0">
          <Form.Check type="checkbox" label="All" id="" />
          <Form.Check type="checkbox" label="Student" id="" />
          <Form.Check type="checkbox" label="Alumni" id="" />
          <Form.Check type="checkbox" label="Teacher" id="" />
          <Form.Check type="checkbox" label="Recruiter" id="" />
        </InputGroup>
      </div>
    </div>
  )
}

export default SearchBarNetworks
