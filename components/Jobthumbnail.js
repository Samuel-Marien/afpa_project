import { React, useState } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

import { IoTrash } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { ImUpload } from 'react-icons/im'

const MyP = (props) => {
  const { className, children } = props
  return (
    <p style={{ fontSize: '.7rem' }} className={className}>
      {children}
    </p>
  )
}

MyP.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-secondary"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="font-weight-bold"
          style={{ fontSize: '.9rem' }}
        >
          Are you sure to delete this job ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '.9rem' }}>
          Are you sure you want to permanently delete this job posting from your
          job list?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-info">
          Back
        </Button>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

MyModal.propTypes = {
  onHide: PropTypes.func
}

const MyEditModal = (props) => {
  const [show, setShow] = useState(false)
  const { companyLogo = '/logos/logo-ibm.png' } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-secondary"
    >
      <Modal.Header closeButton className="p-2">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-25 font-weight-bold d-flex justify-content-between"
          style={{ fontSize: '.9rem' }}
        >
          <MyP>job-number: 666</MyP>
          <MyP>09.03.22</MyP>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                  <InputGroup.Text role="button" className="text-light bg-info">
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
                  <InputGroup.Text role="button" className="text-light bg-info">
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
                  <InputGroup.Text role="button" className="text-light bg-info">
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
            Update!
          </Button>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="d-flex flex-column flex-lg-row justify-content-between">
        <Alert show={show} variant="danger">
          <Alert.Heading>Are you sure to delete this job?</Alert.Heading>
          <p style={{ fontSize: '.8rem' }}>
            Are you sure you want to permanently delete this job posting from
            your job list?
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => setShow(false)}
              variant="outline-danger w-100"
            >
              Delete this job!
            </Button>
          </div>
        </Alert>

        {!show && (
          <Button variant="outline-danger" onClick={() => setShow(true)}>
            Delete this job
          </Button>
        )}
        <Button onClick={props.onHide} variant="outline-info w-25">
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

MyEditModal.propTypes = {
  companyLogo: PropTypes.string,
  onHide: PropTypes.func
}

const JobThumbnail = (props) => {
  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const { companyLogo = '/logos/logo-ibm.png' } = props

  return (
    <div className="bg-light mt-4 p-3 d-flex flex-column flex-sm-row rounded shadow">
      <div className="d-flex flex-column justify-content-start">
        <Image src={companyLogo} rounded />
        <MyP className="mt-2">Ville de Paris, France</MyP>
      </div>
      <div className="ml-4">
        <div className="border-bottom border-info mb-2 d-flex justify-content-between align-items-baseline">
          <MyP>job-number:666</MyP>
          <MyP>09.03.22</MyP>
          <div className="d-flex">
            <div>
              <Button
                variant="link"
                className="p-0 m-0 mr-2 text-warning"
                onClick={() => setShowEdit(true)}
              >
                <FiEdit />
              </Button>
            </div>
            <div>
              <Button
                variant="link"
                className="p-0 m-0 text-danger"
                onClick={() => setShow(true)}
              >
                <IoTrash />
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '.9rem' }}>
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy text ever since
            the 1500...
          </p>
        </div>
      </div>
      <MyModal show={show} onHide={() => setShow(false)} />
      <MyEditModal show={showEdit} onHide={() => setShowEdit(false)} />
    </div>
  )
}

JobThumbnail.propTypes = {
  companyLogo: PropTypes.string
}

export default JobThumbnail
