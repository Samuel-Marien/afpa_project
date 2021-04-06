import React from 'react'
import PropTypes from 'prop-types'

import Head from 'next/head'

import BackButton from './BackButton'
import Logo from './Logo'

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
      <div className="container d-flex flex-column align-items-center float-right">
        {/* <div className="align-self-end mt-3">
          <BackButton buttonTitle="retour" />
        </div>
        <div>
          <Logo size="50" titleStyle="h1 display-5 font-weight-bold" />
        </div>
        <div>
          <h1 className="mt-3 font-weight-light">{pageTitle}</h1>
        </div> */}
        <div className={childrenSize}>{children}</div>
      </div>
    </div>
  )
}

PageHorizontal.propTypes = {
  title: PropTypes.string
}

PageHorizontal.propTypes = {
  pageTitle: PropTypes.string
}

PageHorizontal.propTypes = {
  imgUrl: PropTypes.string
}

PageHorizontal.propTypes = {
  childrenSize: PropTypes.string
}

PageHorizontal.propTypes = {
  children: PropTypes.node
}

export default PageHorizontal
