import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { GiChameleonGlyph } from 'react-icons/gi'

const Logo = (props) => {
  const { size, titleStyle } = props

  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="text-secondary font-weight-bold text-decoration-none text-muted d-flex align-items-center">
          <GiChameleonGlyph size={size} />
          <span className={titleStyle}>AfpA&apos; Lumni</span>
        </div>
      </a>
    </Link>
  )
}

Logo.propTypes = {
  size: PropTypes.number
}

Logo.propTypes = {
  titleStyle: PropTypes.string
}

export default Logo
