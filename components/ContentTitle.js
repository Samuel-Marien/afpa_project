import React from 'react'
import PropTypes from 'prop-types'

const ContentTitle = (props) => {
  const { title, txt1, txt2, option } = props

  return (
    <div className="container text-center mt-5">
      <h1 className="font-weight-bold">{title}</h1>
      <p className="mt-5">{txt1}</p>
      <p>{txt2}</p>
      {option}
    </div>
  )
}

ContentTitle.propTypes = {
  title: PropTypes.string,
  txt1: PropTypes.string,
  txt2: PropTypes.string,
  option: PropTypes.node
}

export default ContentTitle
