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
      <Carousel />
      <div className={className}>{children}</div>

      <Footer />
    </div>
  )
}

PageVertical.propTypes = {
  title: PropTypes.string
}
PageVertical.propTypes = {
  className: PropTypes.string
}
PageVertical.propTypes = {
  children: PropTypes.node
}
PageVertical.propTypes = {
  navBarType: PropTypes.node
}

export default PageVertical
