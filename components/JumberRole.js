import React from 'react'

import CircleIconEg from '../components/CircleIconEg'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const JumberRole = () => {
  return (
    <Jumbotron fluid className="mt-5 mb-0 text-center">
      <Container>
        <h1 className="font-weight-bold">The importance of alumni</h1>
        <p>
          Networking is a powerful factor in efficiency and information sharing.
        </p>
        <div className="d-flex flex-column flex-md-row  mt-5">
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <CircleIconEg
              src={'/portraits/male-5.jpg'}
              type={'Student'}
              txt={
                'While it is beneficial for students and training organizations, it is also beneficial for companies looking for talent. The Alumni network is a real catalyst towards employment thanks to organized events such as networking.'
              }
            />
            <CircleIconEg
              src={'/portraits/male-25.jpg'}
              type={'Teacher'}
              txt={
                'The Alumni network represents an asset when it comes to federating a community of students. Relations with graduates are consolidated thanks to lasting support.'
              }
            />
          </div>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <CircleIconEg
              src={'/portraits/male-24.png'}
              type={'Recruiter'}
              txt={
                'Graduates are a major strategic asset in terms of professional integration. Thus, the Alumni network can be qualified as a catalyst towards employment and fostering the obtaining of a contract'
              }
            />
            <CircleIconEg
              src={'/portraits/female-20.jpeg'}
              type={'School'}
              txt={
                "The alumni community represents a panoply of employers of our students and addressing the needs of businesses by training directly employable graduates is a policy embedded in AFPA's DNA."
              }
            />
          </div>
        </div>
      </Container>
    </Jumbotron>
  )
}
export default JumberRole
