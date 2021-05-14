import { React, useState } from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

import { CgArrowRightR } from 'react-icons/cg'
import { IoTrash } from 'react-icons/io5'

const MessageThumnail = (props) => {
  const [show, setShow] = useState(false)
  const { src, firstName, lastName, date, txt, children } = props

  return (
    <li className="mt-4 d-flex  pr-3 pl-1 rounded ">
      <div className="w-25 bg-dark p-1 d-none d-lg-block rounded">
        <Image src={src} roundedCircle fluid className="border border-info" />
      </div>
      <div className="ml-2 flex-column flex-sm-row d-flex border border-dark rounded px-3 py-2">
        <div>
          <div className="d-flex flex-sm-column flex-row mr-5">
            <div className="w-50 p-1 d-sm-block d-lg-none rounded">
              <Image
                src={src}
                roundedCircle
                fluid
                className="border border-info"
              />
            </div>
            <div className="d-flex flex-column ml-5 ml-sm-1">
              <h1 className="font-weight-bold mb-0">{firstName}</h1>
              <h3 style={{ fontSize: '.9rem' }}>{lastName}</h3>
              <p style={{ fontSize: '.8rem' }}>{date}</p>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="d-flex justify-content-end mb-3">
            <Button
              variant="link"
              className="p-0 m-0 text-danger"
              onClick={() => setShow(true)}
            >
              <IoTrash />
            </Button>
          </div>
          <MyModal show={show} onHide={() => setShow(false)} />
          <div style={{ fontSize: '.9rem' }}>
            <Accordion defaultActiveKey="1">
              {txt.slice(0, 240)}
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <CgArrowRightR />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body as="div" className="p-0">
                  {txt}
                  {children}
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </div>
      </div>
    </li>
  )
}

MessageThumnail.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  txt: PropTypes.string,
  date: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string
}

const AnswerBlock = (props) => {
  const { txt, date, src } = props
  return (
    <div className="border-top border-info mt-5">
      <div className="d-flex justify-content-center">
        <p
          className="w-25 d-flex justify-content-center text-info"
          style={{
            fontSize: '.7rem',
            transform: 'translateY(-50%)',
            background: '#ebf0f4'
          }}
        >
          {date}
        </p>
      </div>

      <div className="bg-light d-flex rounded p-3">
        <div className="w-25">
          <Image src={src} roundedCircle fluid className="w-75" />
        </div>
        <div>
          <p>{txt}</p>
        </div>
      </div>
    </div>
  )
}

AnswerBlock.propTypes = {
  txt: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string
}

const ResponseBlock = () => {
  return (
    <div
      className="bg-light mt-5 p-4 border-info"
      style={{ borderTop: '3px solid ' }}
    >
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={6} placeholder="Enter your text..." />
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="info" type="submit" className="w-25 align-self-end">
          Send
        </Button>
      </div>
    </div>
  )
}

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
          Are you sure to delete this message ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ fontSize: '.9rem' }}>
          Are you sure you want to permanently delete this message from your
          message list?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="outline-info">
          Back
        </Button>
        <Button variant="danger" type="submit">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

MyModal.propTypes = {
  onHide: PropTypes.func
}

const ListMessage = () => {
  return (
    <ul className=" my-5 mx-auto container container-fluid">
      <MessageThumnail
        src={'/portraits/female-20.jpeg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/female-69.jpg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/female-102.jpg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/male-6.jpg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/male-24.png'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/male-25.jpg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
      <MessageThumnail
        src={'/portraits/male-50.jpg'}
        date={'09.03.22'}
        firstName={'Janne'}
        lastName={'Doe'}
        txt={
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
        }
      >
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'12.03.22'}
          txt={
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem'
          }
        />
        <AnswerBlock
          src={'/portraits/female-20.jpeg'}
          date={'13.03.22'}
          txt={
            'Sed ut  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
          }
        />
        <AnswerBlock
          src={'/portraits/male-5.jpg'}
          date={'15.03.22'}
          txt={'Sed ut perspiciatis unde  ?'}
        />
        <ResponseBlock />
      </MessageThumnail>
    </ul>
  )
}

export default ListMessage
