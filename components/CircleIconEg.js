import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const CircleIconEg = (props) => {
  const { src, type, txt } = props
  return (
    <div className="w-25 mx-3">
      <Image
        src={src}
        className="w-75 rounded-circle"
        width={150}
        height={150}
      />
      <p className="font-weight-bold">{type}</p>
      <p className="font-weight-light text-left" style={{ fontSize: '.8rem' }}>
        {txt}
      </p>
    </div>
  )
}

CircleIconEg.propTypes = {
  src: PropTypes.node
}

CircleIconEg.propTypes = {
  type: PropTypes.node
}

CircleIconEg.propTypes = {
  txt: PropTypes.node
}
export default CircleIconEg
