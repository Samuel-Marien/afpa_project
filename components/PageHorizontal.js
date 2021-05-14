import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

const PageHorizontal = (props) => {
  const { title, pageTitle, imgUrl, childrenSize = 'mt-2', children } = props
  return (
    <div
      className="text-secondary"
      style={{
        backgroundImage: `url(${imgUrl})`,
        height: '100vh'
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container d-flex flex-column align-items-center">
        <h1 className="text-dark">{pageTitle}</h1>
        <div className={childrenSize}>{children}</div>
      </div>
    </div>
  )
}

PageHorizontal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  childrenSize: PropTypes.string,
  imgUrl: PropTypes.string,
  pageTitle: PropTypes.string
}

export default PageHorizontal
