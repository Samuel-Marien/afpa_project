import React from 'react'
import PropTypes from 'prop-types'

const ContentMiddle = (props) => {
  const { title, txt1, txt2, option } = props
  return (
    <div className="mx-auto my-5 d-flex flex-column w-75 align-items-center">
      <h1 className="font-weight-bold align-self-center m-1 text-center">
        {title}
      </h1>

      <p className="mt-5 text-center">{txt1}</p>
      <p className="mt-5 text-center">{txt2}</p>

      {option}
    </div>
  )
}

ContentMiddle.propTypes = {
  title: PropTypes.string,
  txt1: PropTypes.string,
  txt2: PropTypes.string,
  option: PropTypes.node
}

export default ContentMiddle
