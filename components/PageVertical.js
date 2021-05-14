import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

import Carousel from './Carousel'
import Footer from './Footer'

const PageVertical = (props) => {
  const { title, className, children } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="d-none d-md-block">
        <Carousel />
      </div>
      <div>
        <img
          className="w-100 d-block d-md-none"
          src="carousel/rsz_keyboard-5017973_1920.jpg"
          alt="Fourd slide"
          style={{ height: '300px' }}
        />
      </div>
      <div className={className}>{children}</div>

      <Footer />
    </div>
  )
}

PageVertical.propTypes = {
  title: PropTypes.string,
  navBarType: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
}

export default PageVertical
