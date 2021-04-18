import React from 'react'
import PropTypes from 'prop-types'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { BiSearchAlt, BiMapPin } from 'react-icons/bi'

const SearchBar = (props) => {
  return (
    <div className="col-12 col-md-8 container container-fluid ml-5 p-3 rounded m-3 bg-dark text-light mx-auto">
      <h2>What job are you looking for?</h2>
      <InputGroup className="">
        <InputGroup className="my-3">
          <FormControl
            className="col-12 col-md-8"
            placeholder="Frontend, React, google..."
          />
          <FormControl
            className="col-12 col-md-4"
            placeholder="Paris, London, Lille..."
          />
          <DropdownButton
            className="d-none d-sm-block"
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
          <InputGroup.Append className="d-none d-sm-block">
            <Button type="submit" variant="outline-info">
              <BiSearchAlt />
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <DropdownButton
          className="d-block d-sm-none col-4"
          variant="info"
          title="contrat"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">CDI</Dropdown.Item>
          <Dropdown.Item href="#">CDD</Dropdown.Item>
          <Dropdown.Item href="#">Stage</Dropdown.Item>
          <Dropdown.Item href="#">Alternance</Dropdown.Item>
        </DropdownButton>
        <Button
          className="d-block d-sm-none col-8"
          type="submit"
          variant="outline-info"
        >
          <BiSearchAlt />
        </Button>
      </InputGroup>
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.node
}
export default SearchBar
