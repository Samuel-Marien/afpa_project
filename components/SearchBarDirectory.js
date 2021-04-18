import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { BiSearchAlt } from 'react-icons/bi'

const SearchBarDirectory = (props) => {
  return (
    <div className="col-12 col-md-8 container container-fluid ml-5 p-3 rounded m-3 bg-dark text-light mx-auto">
      <h2>Talent&apos;s Directory</h2>
      <InputGroup>
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

export default SearchBarDirectory
