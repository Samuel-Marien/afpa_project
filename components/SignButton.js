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
  href: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.string
}

export default SignButton
