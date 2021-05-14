import React from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { CgArrowRightR } from 'react-icons/cg'

const MyP = (props) => {
  const { className = 'mb-1', children } = props
  return (
    <p style={{ fontSize: '.8rem' }} className={className}>
      {children}
    </p>
  )
}

MyP.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

const JobThumbnail = (props) => {
  const [modalShow, setModalShow] = React.useState(false)
  const {
    companyLogo = '/logos/logo-ibm.png',
    city,
    jobNumber,
    date,
    keyword1,
    keyword2,
    keyword3,
    typeContrat,
    jobTitle,
    txt
  } = props

  return (
    <li className="bg-light mt-4 d-flex flex-column flex-md-row pr-3 pl-1 rounded shadow">
      <div className="d-flex flex-column">
        <Image src={companyLogo} rounded className="p-4 " />
        <MyP className=" text-center bg-dark text-info py-2 rounded">
          {city}
        </MyP>
      </div>
      <div className="ml-4">
        <div className="d-flex justify-content-between">
          <MyP>{jobNumber}</MyP>
          <MyP>{date}</MyP>
        </div>
        <div className="d-flex mb-3">
          <Badge className="mr-1" variant="warning">
            {keyword1}
          </Badge>
          <Badge className="mr-1" variant="warning">
            {keyword2}
          </Badge>
          <Badge className="mr-1" variant="warning">
            {keyword3}
          </Badge>
          <Badge variant="info">{typeContrat}</Badge>
        </div>

        <div>
          <div style={{ fontSize: '.9rem' }}>
            <h3>{jobTitle}</h3>
            <Accordion defaultActiveKey="1">
              {txt.slice(0, 263)}
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <CgArrowRightR />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body as="div" className="p-0">
                  {txt}
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="info"
                      type="submit"
                      className="w-25 mt-4 mb-1 align-self-end"
                      onClick={() => setModalShow(true)}
                    >
                      Contact
                    </Button>

                    <ResponseModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </div>
    </li>
  )
}

JobThumbnail.propTypes = {
  companyLogo: PropTypes.string,
  city: PropTypes.string,
  jobNumber: PropTypes.string,
  date: PropTypes.string,
  keyword1: PropTypes.string,
  keyword2: PropTypes.string,
  keyword3: PropTypes.string,
  typeContrat: PropTypes.string,
  jobTitle: PropTypes.string,
  txt: PropTypes.string
}

const ResponseModal = (props) => {
  const { src = '/logos/logo-ibm.png' } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Image src={'/undraw_Processing_re_tbdu.svg'} style={{ opacity: '.5' }} />
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex align-items-center"
        >
          <Image src={src} rounded className="p-1 " />
          <div className="ml-3">
            <h3 className="text-secondary ">Catch this job!</h3>
            <h6>
              <Badge variant="info">Job-Offer: 666</Badge>
            </h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            readOnly
            plaintext
            type="text"
            placeholder="Object Job-Offer: 666"
          ></Form.Control>
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
  onHide: PropTypes.func,
  src: PropTypes.string
}

const ListJob = () => {
  return (
    <ul className=" my-5 mx-auto container container-fluid">
      <JobThumbnail
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        companyLogo={'/logos/logo-hp.png'}
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        companyLogo={'/logos/logo-google.png'}
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        companyLogo={'/logos/logo-microsoft.png'}
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        companyLogo={'/logos/logo-vector-graphics.png'}
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        companyLogo={'/logos/logo-google.png'}
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
      <JobThumbnail
        city={'Ville de Paris, France'}
        jobNumber={'job-number:666'}
        date={'09.03.22'}
        keyword1={'Frontend'}
        keyword2={'React'}
        typeContrat={'CDI'}
        jobTitle={'Frontend Developper Jr'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      />
    </ul>
  )
}

export default ListJob
