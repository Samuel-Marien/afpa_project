import PageHorizontal from '../components/PageHorizontal';
import CircleIconStudent from '../components/CircleIconStudent';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const StudentInscription = (props) => {
  return (
    <PageHorizontal
      title="Student Inscription"
      // pageTitle="Student"
      imgUrl="/people-2583442_1920.jpg"
    >
      <CircleIconStudent />
      <div>
        <Form>
          <Form.Row className="mt-4">
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          <Form.Row className="mt-2">
            <Col>
              <Form.Control placeholder="Afpa center" />
            </Col>
            <Col>
              <Form.Control placeholder="Speciality" />
            </Col>
          </Form.Row>
          <Form.Row className="mt-2">
            <Col>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            <Col>
              <Form.Control type="tel" placeholder="Number phone" />
            </Col>
          </Form.Row>
          <Form.Row className="mt-2 ">
            <Col className="col-2">
              <Form.Control type="number" placeholder="Age" />
            </Col>
            <Col className="col-3">
              <Form.Control
                as="select"
                id="inlineFormStatusSelect"
                className="text-secondary"
              >
                <option value="0">Status...</option>
                <option value="1">New student</option>
                <option value="2">former students</option>
                <option value="3">Tourist</option>
              </Form.Control>
            </Col>

            <Col className="col-3">
              <Form.Control
                as="select"
                id="inlineFormGenderSelect"
                className="text-secondary"
              >
                <option value="0">Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Heu wait...</option>
              </Form.Control>
            </Col>
          </Form.Row>
          <Form.Group
            controlId="formBasicPassword"
            className="mt-4 d-flex flex-column align-items-center"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              className="w-50"
            />
            <p className="w-50" style={{ fontSize: '.7rem' }}>
              Your password must be between 8 and 30 characters.
            </p>
            <Form.Control
              type="password"
              placeholder="Confirm"
              className="w-50"
            />
          </Form.Group>
        </Form>
      </div>
    </PageHorizontal>
  );
};

export default StudentInscription;
