import Link from 'next/link';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import PageHorizontal from '../components/PageHorizontal';

const JobOfferForm = (props) => {
  const { companyLogo } = props;
  return (
    <Form
      className=" bg-light p-3 rounded shadow-sm mt-4"
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
                change your company's logo?
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
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
};

const JobOffer = (props) => {
  return (
    <PageHorizontal
      title="Recruiter Job offer"
      pageTitle="Looking for talents?"
      imgUrl="/writing-1149962_1920.jpg"
      childrenSize="w-50"
    >
      <JobOfferForm companyLogo={'/logos/logo-ibm.png'} />
    </PageHorizontal>
  );
};

export default JobOffer;
