import { useState } from 'react';

import Link from 'next/link';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SettingForm = (props) => {
  const { children } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="text-center">
      <a href="#" className="text-info" style={{ fontSize: '.8rem' }}>
        change your avatar
      </a>
      <Form
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
        className="w-75 m-auto shadow rounded bg-light p-2"
      >
        <Form.Row className="mt-1">
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
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
        {children}
        <Link href="/reinitPswd">
          <Button variant="secondary" className="w-100 mt-2 mb-2 mt-5">
            Change password
          </Button>
        </Link>
        <Button variant="secondary" type="submit" className="w-100 mt-2 mb-2">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default SettingForm;
