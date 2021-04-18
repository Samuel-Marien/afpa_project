import React from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import CircleIconStudent from '../components/CircleIconStudent'
import CircleIconTeacher from '../components/CircleIconTeacher'
import CircleIconRecruiter from '../components/CircleIconRecruiter'

const RoleModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="text-secondary"
      centered
    >
      <Image src={'/undraw_Code_typing_re_p8b9.svg'} className="p-2" />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-info ">
          You are
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container d-flex justify-content-around">
          <CircleIconStudent />
          <CircleIconTeacher />
          <CircleIconRecruiter />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          className="btn-light btn-outline-info shadow"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

RoleModal.propTypes = {
  onHide: PropTypes.func
}

export default RoleModal
