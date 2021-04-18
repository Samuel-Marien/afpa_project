import React from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { IoTrash } from 'react-icons/io5'
import { IoIosMail, IoIosEye } from 'react-icons/io'

const ResponseModal = (props) => {
  const { src = '/portraits/male-50.jpg', firstName, lastName } = props
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Image
        src={'/undraw_Code_thinking_re_gka2.svg'}
        style={{ opacity: '.5' }}
        className="p-4"
      />
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex align-items-center"
        >
          <Image src={src} roundedCircle fluid className="p-1 w-25 shadow" />
          <div className="ml-1 d-flex flex-column">
            <h3>
              {firstName}John{' '}
              <span className="text-secondary">Doe{lastName}</span>
            </h3>
            <Badge variant="info w-50" style={{ fontSize: '.7rem' }}>
              Recruiter
            </Badge>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="Your message..."
            rows={8}
            className={'mt-2'}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="danger" onClick={props.onHide}>
          Back
        </Button>
        <Button variant="dark">Send</Button>
      </Modal.Footer>
    </Modal>
  )
}

ResponseModal.propTypes = {
  onHide: PropTypes.func
}
ResponseModal.propTypes = {
  src: PropTypes.string
}
ResponseModal.propTypes = {
  firstName: PropTypes.string
}
ResponseModal.propTypes = {
  lastName: PropTypes.string
}

const TrashModal = (props) => {
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
          Are you sure to delete this contact ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '.9rem' }}>
          Are you sure you want to permanently delete this contact from your
          friend&apos;s list?
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

TrashModal.propTypes = {
  onHide: PropTypes.func
}

const NetworksThumbnail = (props) => {
  const [modalShow, setModalShow] = React.useState(false)
  const [trashModalShow, setTrashModalShow] = React.useState(false)

  const { src, firstName, lastName, role } = props
  return (
    <Card className="shadow-sm p-2 mb-3">
      <div>
        <div className="d-flex justify-content-between p-1 bg-dark text-light shadow-sm">
          <div className="d-flex m-1">
            <Card.Title>
              {firstName}
              <span className="text-muted" style={{ fontSize: '.9rem' }}>
                {' '}
                {lastName}
              </span>
            </Card.Title>
            <Card.Title></Card.Title>
          </div>

          <IoTrash
            role="button"
            onClick={() => setTrashModalShow(true)}
            className="mb-5 text-danger"
          />
          <TrashModal
            show={trashModalShow}
            onHide={() => setTrashModalShow(false)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <Image
          src={src}
          roundedCircle
          fluid
          className="border-dark p-1"
          style={{
            width: '80px',
            transform: 'translateY(-50%)',
            border: '3px solid '
          }}
        />
        <div className="">
          <Badge variant="info px-3">{role}</Badge>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <IoIosMail
          className="text-info"
          role="button"
          size={25}
          onClick={() => setModalShow(true)}
        />
        <ResponseModal show={modalShow} onHide={() => setModalShow(false)} />
        <a href="/studentVisualIdPage">
          <IoIosEye size={25} role="button" className="text-info" />
        </a>
      </div>
    </Card>
  )
}

NetworksThumbnail.propTypes = {
  src: PropTypes.string
}
NetworksThumbnail.propTypes = {
  firstName: PropTypes.string
}
NetworksThumbnail.propTypes = {
  lastName: PropTypes.string
}
NetworksThumbnail.propTypes = {
  date: PropTypes.string
}
NetworksThumbnail.propTypes = {
  txt: PropTypes.string
}
NetworksThumbnail.propTypes = {
  role: PropTypes.string
}

const NetworksContent = (props) => {
  return (
    <CardGroup>
      <div className="my-5 container container-fluid ">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-20.jpeg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-69.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-102.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/male-25.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-20.jpeg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-69.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-102.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/male-25.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-20.jpeg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-69.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-102.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/male-25.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-20.jpeg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-69.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>

          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/female-102.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Recruiter'}
            />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <NetworksThumbnail
              src={'/portraits/male-25.jpg'}
              firstName={'Janne'}
              lastName={'Doe'}
              role={'Student'}
            />
          </Col>
        </Row>
      </div>
    </CardGroup>
  )
}

export default NetworksContent
