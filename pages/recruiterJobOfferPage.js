import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'

import PageHorizontal from '../components/PageHorizontal'
import NavBar2 from '../components/NavBar2'

import { ImUpload } from 'react-icons/im'

const JobOffer = (props) => {
  const { companyLogo = '/logos/logo-ibm.png' } = props
  return (
    <PageHorizontal
      title="Recruiter Job offer"
      imgUrl="/writing-1149962_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>
      <div className=" bg-light p-md-4 p-0 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3 text-center">
          Looking for talents?
        </div>
        <Form
          className=" bg-light p-3 rounded shadow-sm mt-4"
          style={{ opacity: '.7' }}
        >
          <Form.Group>
            <Form.Row>
              <Col
                sm={12}
                md={4}
                className="bg-white d-flex flex-column justify-content-center align-items-center shadow-sm rounded"
              >
                <Image src={companyLogo} rounded className="p-2 m-4" />

                <Link href="#">
                  <a className="text-info mt-2" style={{ fontSize: '.5rem' }}>
                    change your company&apos;s logo?
                  </a>
                </Link>
              </Col>
              <Col
                sm={12}
                md={5}
                className="ml-2 mt-4 mt-md-0 text-center text-md-left"
              >
                <h2 className="font-bold">John doe</h2>
                <h6>Tech Recruiter</h6>
                <Link href="#">
                  <a className="text-info" style={{ fontSize: '.7rem' }}>
                    Johndoe@joboffer.com
                  </a>
                </Link>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Col className="px-0">
              <Form.Control type="text" placeholder="Job title*" />
            </Col>
            <Col className="mt-2 px-0">
              <Form.Control
                type="text"
                as="textarea"
                rows={9}
                placeholder="Description*"
              />
            </Col>
          </Form.Group>

          <Form.Group>
            <Form.Row className="my-3">
              <Col xs={12} md={4}>
                <InputGroup>
                  <Form.Control placeholder="Key word" />
                  <InputGroup.Append>
                    <InputGroup.Text
                      role="button"
                      className="text-light bg-info"
                    >
                      <ImUpload />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <h6 className="text-center">
                  <Badge variant="warning">Frontend</Badge>
                </h6>
              </Col>
              <Col xs={12} md={4}>
                <InputGroup>
                  <Form.Control placeholder="Key word" />
                  <InputGroup.Append>
                    <InputGroup.Text
                      role="button"
                      className="text-light bg-info"
                    >
                      <ImUpload />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <h6 className="text-center">
                  <Badge variant="warning">React.Js</Badge>
                </h6>
              </Col>
              <Col xs={12} md={4}>
                <InputGroup>
                  <Form.Control placeholder="Key word" />
                  <InputGroup.Append>
                    <InputGroup.Text
                      role="button"
                      className="text-light bg-info"
                    >
                      <ImUpload />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <h6 className="text-center">
                  <Badge variant="info">Node/Sql</Badge>
                </h6>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col xs={2} className="my-1">
                <DropdownButton
                  variant="secondary"
                  title="contrat"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">CDI</Dropdown.Item>
                  <Dropdown.Item href="#">CDD</Dropdown.Item>
                  <Dropdown.Item href="#">Stage</Dropdown.Item>
                  <Dropdown.Item href="#">Alternance</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs={12} md={5} className="my-1">
                <Form.Control placeholder="City" />
              </Col>
              <Col xs={12} md={5} className="my-1">
                <Form.Control placeholder="Salary" />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group className="d-flex justify-content-end">
            <Button type="submit" className="w-25 shadow bg-info">
              Post!
            </Button>
          </Form.Group>
        </Form>
      </div>
    </PageHorizontal>
  )
}

JobOffer.propTypes = {
  companyLogo: PropTypes.string
}
export default JobOffer
