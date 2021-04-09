import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SearchBarMessage = (props) => {
  return (
    <div className="w-50 mx-auto mt-5 mb-3 px-3 text-center rounded shadow-sm text-light bg-dark p-2">
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
      <InputGroup className="w-75 d-flex justify-content-between align-items-start p-0">
        <Form.Check type="checkbox" label="All" id="" />
        <Form.Check type="checkbox" label="Student" id="" />
        <Form.Check type="checkbox" label="Alumni" id="" />
        <Form.Check type="checkbox" label="Teacher" id="" />
        <Form.Check type="checkbox" label="Recruiter" id="" />
      </InputGroup>
    </div>
  )
}

export default SearchBarMessage
