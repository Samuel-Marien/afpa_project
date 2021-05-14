import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import JobThumbnail from '../components/Jobthumbnail'

import NavBar2 from '../components/NavBar2'

const ManageJob = () => {
  return (
    <PageHorizontal
      title="Recruiter Manage Job offer"
      imgUrl="/writing-1149962_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>
      <div className="bg-light p-md-4 p-0 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3 text-center">
          Something new?
        </div>
        <div
          className="px-3 pb-2"
          style={{ height: '650px', overflow: 'auto' }}
        >
          <JobThumbnail />
          <JobThumbnail />
          <JobThumbnail />
          <JobThumbnail />
          <JobThumbnail />
        </div>
      </div>
    </PageHorizontal>
  )
}

export default ManageJob
