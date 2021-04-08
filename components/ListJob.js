import React from 'react'
import PropTypes from 'prop-types'

import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const MyP = (props) => {
  const { className = 'mb-1', children } = props
  return (
    <p style={{ fontSize: '.8rem' }} className={className}>
      {children}
    </p>
  )
}

MyP.propTypes = {
  className: PropTypes.string
}

MyP.propTypes = {
  children: PropTypes.node
}

const JobThumbnail = (props) => {
  const { companyLogo = '/logos/logo-ibm.png' } = props

  return (
    <div className="bg-light d-flex pr-3 pl-1 rounded shadow">
      <div className="d-flex flex-column">
        <Image src={companyLogo} rounded className="p-4 " />
        <MyP className=" text-center bg-dark text-info py-2 rounded">
          Ville de Paris, France
        </MyP>
      </div>
      <div className="ml-4">
        <div className="d-flex justify-content-between">
          <MyP>job-number:666</MyP>
          <MyP>09.03.22</MyP>
        </div>
        <div className="d-flex mb-3">
          <Badge className="mr-1" variant="warning">
            Frontend
          </Badge>
          <Badge className="mr-1" variant="warning">
            React
          </Badge>
          <Badge variant="info">CDI</Badge>
        </div>

        <div>
          <div style={{ fontSize: '.9rem' }}>
            <h3>Frontend Junior</h3>

            <Accordion defaultActiveKey="0">
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsumbeen the industry&apos;s standard dummy text ever since
              the 1500 Issly dnting and typesetting industry. Los simpmmy text
              of the printing and typesetting industry. Lorem Ipsum
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                ...
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500.Is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500... Is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry&apos;s standard dummy text ever since the
                  1500.Is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard
                  dummy text ever since the 1500... Is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500.Is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500 printing and typesetting industry. Lorem
                  Ipsum has been the industry&apos;s standard dummy text ever
                  since the 1500.Is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500.
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
    </div>
  )
}

JobThumbnail.propTypes = {
  companyLogo: PropTypes.string
}

const ListJob = (props) => {
  return (
    <div className="w-50 my-5 mx-auto">
      <JobThumbnail />
    </div>
  )
}

export default ListJob
