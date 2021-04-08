import React from 'react'
import PropTypes from 'prop-types'

import PageVertical from '../components/PageVertical'
import NavBar2 from '../components/NavBar2'
import SearchBar from '../components/SearchBar'
import ListJob from '../components/ListJob'

const JobOffer = (props) => {
  return (
    <PageVertical title={'Job Offers'} className={'w-100'}>
      <NavBar2 />
      <SearchBar />
      <ListJob />
    </PageVertical>
  )
}

JobOffer.propTypes = {
  children: PropTypes.node
}
export default JobOffer
