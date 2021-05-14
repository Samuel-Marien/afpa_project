import { React, useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { IoIosLogOut } from 'react-icons/io'

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
          Are you sure you want to log out ?
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-info">
          Back
        </Button>
        <Button variant="danger" type="submit">
          Log Out
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

MyModal.propTypes = {
  onHide: PropTypes.func
}

const LogOutBut = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <IoIosLogOut
        size={25}
        className="text-danger ml-4"
        onClick={() => setShow(true)}
      />
      <MyModal show={show} onHide={() => setShow(false)} />
    </div>
  )
}

export default LogOutBut
