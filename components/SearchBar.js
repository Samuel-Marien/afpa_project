import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const SearchBar = (props) => {
  return (
    <div className="container container fluid mx-auto mt-1 mt-md-5 mb-3 px-3 text-center rounded shadow-sm text-light bg-dark p-2">
      <h2>What job are you looking for?</h2>
      {/* first block */}
      <div className="d-none d-md-block d-lg-none">
        <InputGroup className="mb-3 mt-3 flex-column flex-md-row">
          <InputGroup className="w-100">
            <FormControl placeholder="Frontend, React, google..." />
            <FormControl placeholder="Paris, London..." />
            <DropdownButton
              as={InputGroup.Prepend}
              variant="warning"
              title="contrat"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">CDI</Dropdown.Item>
              <Dropdown.Item href="#">CDD</Dropdown.Item>
              <Dropdown.Item href="#">Stage</Dropdown.Item>
              <Dropdown.Item href="#">Alternance</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <Button
            className="px-5 w-100 mt-3"
            type="submit"
            variant="outline-info"
          >
            search
          </Button>
        </InputGroup>
      </div>
      {/* second block */}
      <div className="d-none d-lg-block">
        <InputGroup className="mb-3 mt-3 ">
          <FormControl placeholder="Frontend, React, google..." />
          <FormControl placeholder="Paris, London..." />
          <DropdownButton
            as={InputGroup.Prepend}
            variant="warning"
            title="contrat"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">CDI</Dropdown.Item>
            <Dropdown.Item href="#">CDD</Dropdown.Item>
            <Dropdown.Item href="#">Stage</Dropdown.Item>
            <Dropdown.Item href="#">Alternance</Dropdown.Item>
          </DropdownButton>
          <InputGroup.Append>
            <Button className="px-5 w-100" type="submit" variant="outline-info">
              search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      {/* third block */}
      <div className="d-block d-md-none">
        <InputGroup className="mb-3 mt-3">
          <FormControl
            placeholder="Frontend, React, google..."
            className="w-100 mb-2"
          />
          <FormControl placeholder="Paris, London..." />
          <DropdownButton
            as={InputGroup.Prepend}
            variant="warning"
            title="contrat"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">CDI</Dropdown.Item>
            <Dropdown.Item href="#">CDD</Dropdown.Item>
            <Dropdown.Item href="#">Stage</Dropdown.Item>
            <Dropdown.Item href="#">Alternance</Dropdown.Item>
          </DropdownButton>
          <div className="w-100">
            <Button
              className="px-5 w-100 mt-2"
              type="submit"
              variant="outline-info"
            >
              search
            </Button>
          </div>
        </InputGroup>
      </div>
    </div>
  )
}

export default SearchBar
