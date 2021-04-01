import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const BackButton = (props) => {
  const { buttonTitle } = props

  return (
    <Link href="/">
      <a>
        <button className="btn btn-secondary">{buttonTitle}</button>
      </a>
    </Link>
  )
}

BackButton.propTypes = {
  buttonTitle: PropTypes.node
}

export default BackButton
