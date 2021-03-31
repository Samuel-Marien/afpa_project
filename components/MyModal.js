import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import CircleIconStudent from '../components/CircleIconStudent';
import CircleIconTeacher from '../components/CircleIconTeacher';
import CircleIconRecruiter from '../components/CircleIconRecruiter';

const MyModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-secondary"
      // style={{
      //   background: `url('/hong-kong-1990268_1920.jpg')center no-repeat `,
      // }}
    >
      <div
        style={{
          background: `url('/hong-kong-1990268_1920.jpg')center no-repeat `,
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="text-info "
          >
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
      </div>
    </Modal>
  );
};

export default MyModal;
