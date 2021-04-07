import React from 'react'
import PropTypes from 'prop-types'

import PageVertical from '../components/PageVertical'

const JobOffer = (props) => {
  return <PageVertical title={'Job Offers'}></PageVertical>
}

JobOffer.propTypes = {
  children: PropTypes.node
}
export default JobOffer
