import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

import SignButton from './SignButton'
import NavBar from './NavBar'
import Carousel from './Carousel'
import ContentTitle from './ContentTitle'
import JumberRole from './JumberRole'
import MiddleCarousel from './MiddleCarousel'
import ContentCards from './ContentCards'
import Footer from './Footer'
import ContentMiddle from './ContentMiddle'
// import MyModal from './MyModal'

const PageVertical = (props) => {
  const { title } = props
  // const [modalShow, setModalShow] = React.useState(false)
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Carousel />
      {/* <MyModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <ContentTitle
        title={"Let's build the network together"}
        txt1={
          'So that the alumni network meets your aspirations and your convictions,it is with you that we are building it.'
        }
        txt2={
          "So that the Afpa community can act on the world, let's get involved together!"
        }
        option={
          <div className="mt-5">
            <SignButton
              href="#"
              variant={'outline-info'}
              className={'px-5 mr-5 shadow'}
              // onClick={() => setModalShow(true)}
            >
              Sign Up
            </SignButton>
            <SignButton
              href={'/SignIn'}
              variant={'outline-secondary'}
              className={'px-5 shadow'}
            >
              Sign In
            </SignButton>
          </div>
        }
      />
      <JumberRole />
      <MiddleCarousel
        src={'/businessmen.jpg'}
        alt={'cooperation picture'}
        src1={'/work-5382501_1920.jpg'}
        alt1={'cooperation picture'}
        src2={'/hong-kong-1990268_1920.jpg'}
        alt2={'cooperation picture'}
      />

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
          <div className="my-5">
            <SignButton
              href="#"
              variant={'outline-info'}
              className={'px-5 mr-5 shadow'}
              // onClick={() => setModalShow(true)}
            >
              Sign Up
            </SignButton>
            <SignButton
              href={'/SignIn'}
              variant={'outline-secondary'}
              className={'px-5 shadow'}
            >
              Sign In
            </SignButton>
          </div>
        }
      />
      <Footer />
    </div>
  )
}

PageVertical.propTypes = {
  title: PropTypes.string
}
export default PageVertical
