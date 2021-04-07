import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

import NavBar from './NavBar'
import Carousel from './Carousel'
import Footer from './Footer'

const PageVertical = (props) => {
  const { title, children } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <Carousel />
      {children}
      <Footer />
    </div>
  )
}

PageVertical.propTypes = {
  title: PropTypes.string
}
PageVertical.propTypes = {
  children: PropTypes.node
}
export default PageVertical
