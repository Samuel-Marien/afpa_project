import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Card from 'react-bootstrap/Card'

import { IoIosMail, IoIosEye, IoIosPersonAdd } from 'react-icons/io'

import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const ResponseModal = (props) => {
  const { src = '/portraits/male-50.jpg' } = props
  return (
    <Modal
      {...props}
      size="lg"
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
          <div className="ml-3">
            <h6>
              <Badge variant="info">Recruiter</Badge>
            </h6>
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

const Thumbnail = (props) => {
  const [modalShow, setModalShow] = React.useState(false)
  const { src, role, title, txt1 } = props
  return (
    <Card
      style={{ width: '16rem' }}
      className="shadow bg-dark text-light mx-4 mb-4"
    >
      <Card.Img
        variant="top"
        src={src}
        style={{ height: '230px', width: 'auto' }}
      />
      <Card.ImgOverlay className="p-2 d-flex flex-column">
        <div className="d-flex justify-content-between">
          <a
            role="button"
            className="text-secondary shadow px-2 rounded shadow bg-light"
            style={{ opacity: '.6' }}
          >
            <IoIosMail size={25} onClick={() => setModalShow(true)} />
          </a>
          <a
            role="button"
            className="text-secondary shadow px-2 rounded shadow bg-light"
            style={{ opacity: '.6' }}
          >
            <IoIosPersonAdd size={25} onClick={() => setModalShow(true)} />
          </a>
          <ResponseModal show={modalShow} onHide={() => setModalShow(false)} />
          <Link href="/studentVisualIdPage">
            <a className="text-secondary">
              <div
                className="px-2 ml-3 rounded shadow bg-light"
                style={{ opacity: '.6' }}
              >
                <IoIosEye size={25} />
              </div>
            </a>
          </Link>
        </div>
      </Card.ImgOverlay>
      <Card.Body className="pt-0">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          I&apos;m {role}
        </Card.Subtitle>
        <Card.Text>{txt1}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Thumbnail.propTypes = {
  children: PropTypes.node
}
Thumbnail.propTypes = {
  src: PropTypes.string
}

Thumbnail.propTypes = {
  role: PropTypes.string
}

Thumbnail.propTypes = {
  title: PropTypes.string
}

Thumbnail.propTypes = {
  txt1: PropTypes.string
}

export default Thumbnail
