import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const ProfilCircleIcon = (props) => {
  const { src } = props
  return (
    <div>
      <Image src={src} className="rounded-circle" width={40} height={40} />
    </div>
  )
}

ProfilCircleIcon.propTypes = {
  src: PropTypes.string
}

export default ProfilCircleIcon
