import React from 'react'
import PropTypes from 'prop-types'

import SignButton from './SignButton'
import ContentTitle from './ContentTitle'
import JumberRole from './JumberRole'
import MiddleCarousel from './MiddleCarousel'
import ContentCards from './ContentCards'
import ContentMiddle from './ContentMiddle'
import PageVertical from './PageVertical'

import NavBar from './NavBar'

const Landing = (props) => {
  return (
    <PageVertical title={'Landing'}>
      <NavBar />
      <ContentTitle
        title={"Let's build the network together"}
        txt1={
          'So that the alumni network meets your aspirations and your convictions,it is with you that we are building it.'
        }
        txt2={
          "So that the Afpa community can act on the world, let's get involved together!"
        }
        option={
          <div className="mt-5 w-50 mx-auto d-flex flex-column flex-md-row justify-content-around">
            <SignButton
              href="/selectRolePage"
              variant={'outline-info'}
              className={'px-4 shadow'}
            >
              Sign Up
            </SignButton>
            <SignButton
              href={'/SignIn'}
              variant={'outline-secondary'}
              className={'px-4 shadow mt-3 mt-md-0'}
            >
              Sign In
            </SignButton>
          </div>
        }
      />
      <JumberRole />
      <div className="d-none d-md-block">
        <MiddleCarousel
          src={'/businessmen.jpg'}
          alt={'cooperation picture'}
          src1={'/work-5382501_1920.jpg'}
          alt1={'cooperation picture'}
          src2={'/hong-kong-1990268_1920.jpg'}
          alt2={'cooperation picture'}
        />
      </div>
      <div>
        <img
          className="w-100 d-block d-md-none"
          src="/hong-kong-1990268_1920.jpg"
          alt="Fourd slide"
          style={{ height: '250px' }}
        />
      </div>
      <ContentMiddle
        title={'The Alumni network from yesterday to today'}
        txt1={
          "To fully understand how much the Alumni network has evolved, let's first give its first definition. Basically, it was essentially an association of former students, in which the latter, from the same school institute come together to continue to maintain the bonds of camaraderie forged during their studies."
        }
        txt2={
          'But now the Alumni network has many other uses, although it still refers to a group of alumni from the same school or training. Among other things, it has become a source of contacts for students and an invaluable source of candidates for recruiters. You should also know that today we can use this term to refer to a group of workers working in the same company.'
        }
      />
      <ContentCards />
      <ContentTitle
        title={'Social capital is an inexhaustible resource'}
        txt1={
          'It must be remembered that behind the word alumni are professionals who have been involved in working life for several decades. Experienced individuals who are potentially looking for their future intern or collaborator. Through a well-organized directory, it is easy to find the right person to answer a specific question.'
        }
        txt2={
          'Keeping the link with the alumni is a beneficial mission for all. Students are guided and their professional integration promoted. Alumni, on the other hand, acquire their future collaborator and are part of a real network of professionals. Finally, the school can only encourage this initiative to find qualified speakers and improve its brand image. Tempted by the project?'
        }
        option={
          <div className="mt-5 mb-5 w-50 mx-auto d-flex flex-column flex-md-row justify-content-around">
            <SignButton
              href="/selectRolePage"
              variant={'outline-info'}
              className={'px-4 shadow'}
            >
              Sign Up
            </SignButton>
            <SignButton
              href={'/SignIn'}
              variant={'outline-secondary'}
              className={'px-4 shadow mt-3 mt-md-0'}
            >
              Sign In
            </SignButton>
          </div>
        }
      />
    </PageVertical>
  )
}

Landing.propTypes = {
  title: PropTypes.string
}
export default Landing
