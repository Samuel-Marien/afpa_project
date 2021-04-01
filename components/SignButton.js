import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'
import Button from 'react-bootstrap/Button'

const SignButton = (props) => {
  const { href, variant, className, onClick, children } = props
  return (
    <Link href={href}>
      <Button variant={variant} className={className} onClick={onClick}>
        {children}
      </Button>
    </Link>
  )
}

SignButton.propTypes = {
  href: PropTypes.string
}

SignButton.propTypes = {
  variant: PropTypes.string
}

SignButton.propTypes = {
  className: PropTypes.string
}

SignButton.propTypes = {
  onClick: PropTypes.func
}

SignButton.propTypes = {
  children: PropTypes.node
}
export default SignButton
