import { React, useState } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import { IoTrash } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'

const MyP = (props) => {
  const { className, children } = props
  return (
    <p style={{ fontSize: '.7rem' }} className={className}>
      {children}
    </p>
  )
}

MyP.propTypes = {
  className: PropTypes.string
}

MyP.propTypes = {
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
        <Form
          className=" bg-light p-3 rounded shadow mt-4"
          style={{ opacity: '.7' }}
        >
          <Form.Group>
            <Form.Row>
              <Col
                xs={5}
                className="bg-white d-flex flex-column justify-content-center align-items-center shadow-sm rounded"
              >
                <Image src={companyLogo} rounded />

                <Link href="#">
                  <a className="text-info mt-2" style={{ fontSize: '.5rem' }}>
                    change your company&aposs logo?
                  </a>
                </Link>
              </Col>
              <Col xs={5} className="ml-2">
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
            <Form.Row>
              <Col xs={3}>
                <Form.Control placeholder="Contrat" />
              </Col>
              <Col xs={5}>
                <Form.Control placeholder="City" />
              </Col>
              <Col>
                <Form.Control placeholder="Salary" />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group className="d-flex justify-content-end">
            <Button type="submit" className="w-25 shadow bg-info">
              Update
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-info">
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

MyEditModal.propTypes = {
  companyLogo: PropTypes.string
}
MyEditModal.propTypes = {
  onHide: PropTypes.func
}

const JobThumbnail = (props) => {
  const [show, setShow] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const { companyLogo = '/logos/logo-ibm.png' } = props

  return (
    <div className="bg-light mt-4 p-3 d-flex rounded shadow">
      <div className=" d-flex flex-column justify-content-start">
        <Image src={companyLogo} rounded />
        <MyP className="mt-2">Ville de Paris, France</MyP>
      </div>
      <div className="ml-4">
        <div className="d-flex justify-content-between">
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
