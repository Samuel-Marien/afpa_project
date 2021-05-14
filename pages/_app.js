import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.string,
  pageProps: PropTypes.object
}

export default MyApp
