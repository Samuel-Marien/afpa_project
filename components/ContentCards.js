import React from 'react'

import Thumbnail from './Thumbnail'
import Jumbotron from 'react-bootstrap/Jumbotron'

const ContentCards = (props) => {
  return (
    <Jumbotron className="mt-5">
      <div className="d-flex justify-content-center">
        <Thumbnail
          src={'/portraits/male-50.jpg'}
          title={'John Doe'}
          role={'Recruiter'}
          txt1={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ></Thumbnail>
        <Thumbnail
          src={'/portraits/teacher.jpg'}
          title={'John Doe'}
          role={'Teacher'}
          txt1={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        />
        <Thumbnail
          src={'/portraits/male-5.jpg'}
          title={'John Doe'}
          role={'Student'}
          txt1={
            'Hello, graduated from AFPA, I am a NodeJS / HTML developer available in Nantes'
          }
        />
        <Thumbnail
          src={'/portraits/male-6.jpg'}
          title={'John Doe'}
          role={'Recruiter'}
          txt1={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ></Thumbnail>
        <Thumbnail
          src={'/portraits/female-102.jpg'}
          title={'John Doe'}
          role={'Student'}
          txt1={
            'Hello, graduated from AFPA, I am a NodeJS / HTML developer available in Nantes'
          }
        />
      </div>
    </Jumbotron>
  )
}

export default ContentCards
