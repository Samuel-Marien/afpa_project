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
      <div className="py-5" style={{ background: '#d3dde7' }}>
        <SearchBar />
      </div>
      <div className="py-5" style={{ background: '#ebf0f4' }}>
        <ListJob />
      </div>
    </PageVertical>
  )
}

JobOffer.propTypes = {
  children: PropTypes.node
}
export default JobOffer
