import Head from 'next/head';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ConnectForm = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="secondary" type="submit">
          Submit
        </Button>
        <Form.Text className="align-self-end">
          <a href="#">Forgot password ?</a>
        </Form.Text>
      </div>
    </Form>
  );
};

export default ConnectForm;
