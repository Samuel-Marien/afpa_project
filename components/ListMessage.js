import React from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { CgArrowRightR } from 'react-icons/cg'

const MessageThumnail = (props) => {
  const {
    avatarFace = '/portraits/female-20.jpeg',
    firstName,
    lastName,
    date,
    txt,
    children
  } = props

  return (
    <li className="mt-4 d-flex  pr-3 pl-1 rounded ">
      <div className="w-25 bg-dark p-1 d-none d-lg-block rounded">
        <Image
          src={avatarFace}
          roundedCircle
          fluid
          className="border border-info"
        />
      </div>

      <div className="ml-2 flex-column flex-sm-row d-flex border border-dark rounded px-3 py-2">
        <div>
          <div className="d-flex flex-sm-column flex-row mr-5">
            <div className="w-50 p-1 d-sm-block d-lg-none rounded">
              <Image
                src={avatarFace}
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
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="info"
                      type="submit"
                      className="w-25 mt-4 mb-1 align-self-end"
                    >
                      Contact
                    </Button>
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

MessageThumnail.propTypes = {
  avatarFace: PropTypes.string
}
MessageThumnail.propTypes = {
  firstName: PropTypes.string
}
MessageThumnail.propTypes = {
  lastName: PropTypes.string
}
MessageThumnail.propTypes = {
  date: PropTypes.string
}
MessageThumnail.propTypes = {
  txt: PropTypes.string
}
MessageThumnail.propTypes = {
  children: PropTypes.node
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
  txt: PropTypes.string
}
AnswerBlock.propTypes = {
  src: PropTypes.string
}
AnswerBlock.propTypes = {
  date: PropTypes.string
}

const ListMessage = (props) => {
  return (
    <ul className=" my-5 mx-auto container container-fluid">
      <MessageThumnail
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
      </MessageThumnail>
    </ul>
  )
}

export default ListMessage
