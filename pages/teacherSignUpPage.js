import PageHorizontal from '../components/PageHorizontal';
import CircleIconTeacher from '../components/CircleIconTeacher';
import SignUpForm from '../components/SignUpForm';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const OptionForm = (props) => {
  return (
    <div>
      <Form.Row className="mt-2">
        <Col>
          <Form.Control placeholder="Afpa center*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Afpa Center.
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Control placeholder="Speciality*" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Speciality.
          </Form.Control.Feedback>
        </Col>
         
      </Form.Row>
      <Form.Row className="mt-2">
        <Col className="col-3">
          <Form.Control type="number" placeholder="Age" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Gender.
          </Form.Control.Feedback>
        </Col>
      </Form.Row>
    </div>
  );
};

const TeacherInscription = (props) => {
  return (
    <PageHorizontal
      title="Teacher Inscription"
      pageTitle="Sign Up"
      imgUrl="/startup-593341_1920.jpg"
    >
      <CircleIconTeacher />
      <SignUpForm>
        <OptionForm />
      </SignUpForm>
    </PageHorizontal>
  );
};

export default TeacherInscription;
