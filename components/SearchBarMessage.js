import React from 'react'
import PropTypes from 'prop-types'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const BoardMessage = (props) => {
  const {
    totalMessage = 10,
    studentMessage = 6,
    teacherMessage = 3,
    recruiterMessage = 1
  } = props

  return (
    <div className="border border-info p-3 rounded m-3 w-100">
      <div className="d-flex justify-content-between">
        <p>My messages</p>
        <p>{totalMessage}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Student</p>
        <p>{studentMessage}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Teacher</p>
        <p>{teacherMessage}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Recruiter</p>
        <p>{recruiterMessage}</p>
      </div>
    </div>
  )
}
BoardMessage.propTypes = {
  totalMessage: PropTypes.number
}
BoardMessage.propTypes = {
  studentMessage: PropTypes.number
}
BoardMessage.propTypes = {
  teacherMessage: PropTypes.number
}
BoardMessage.propTypes = {
  recruiterMessage: PropTypes.number
}

const SearchBarMessage = (props) => {
  return (
    <div className="w-50 d-flex mx-auto rounded shadow-sm text-light bg-dark p-2">
      <div>
        <BoardMessage />
      </div>
      <div className="ml-5 w-75 border border-info p-3 rounded m-3">
        <h2>Mailboxes</h2>
        <InputGroup>
          <InputGroup className="mb-3 mt-3">
            <FormControl placeholder="What are you looking for?" />
            <InputGroup.Append>
              <Button className="px-5" type="submit" variant="outline-info">
                search
              </Button>
            </InputGroup.Append>
          </InputGroup>
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

export default SearchBarMessage
