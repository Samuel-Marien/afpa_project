import React from 'react'
import PropTypes from 'prop-types'

import PageVertical from '../components/PageVertical'
import NavBar2 from '../components/NavBar2'

const JobOffer = (props) => {
  return (
    <PageVertical title={'Job Offers'} className={'w-100'}>
      <NavBar2 />
    </PageVertical>
  )
}

JobOffer.propTypes = {
  children: PropTypes.node
}
export default JobOffer
