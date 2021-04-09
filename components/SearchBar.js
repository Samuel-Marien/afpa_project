import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const SearchBar = (props) => {
  return (
    <div className="w-50 mx-auto mt-5 mb-3 px-3 text-center rounded shadow-sm text-light bg-dark p-2">
      <h2>What job are you looking for?</h2>
      <InputGroup className="mb-3 mt-3">
        <FormControl placeholder="Frontend, React, google..." />
        <FormControl placeholder="Paris, London..." />
        <DropdownButton
          as={InputGroup.Prepend}
          variant="info"
          title="contrat"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">CDI</Dropdown.Item>
          <Dropdown.Item href="#">CDD</Dropdown.Item>
          <Dropdown.Item href="#">Stage</Dropdown.Item>
          <Dropdown.Item href="#">Alternance</Dropdown.Item>
        </DropdownButton>

        <InputGroup.Append>
          <Button className="px-5" type="submit" variant="outline-info">
            search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export default SearchBar
