import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const BackButton = (props) => {
  const { className = 'btn btn-secondary', buttonTitle } = props

  return (
    <Link href="/">
      <a>
        <button className={className}>{buttonTitle}</button>
      </a>
    </Link>
  )
}

BackButton.propTypes = {
  buttonTitle: PropTypes.node
}

BackButton.propTypes = {
  className: PropTypes.string
}

export default BackButton
