import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import JobThumbnail from '../components/Jobthumbnail'

const ManageJob = (props) => {
  return (
    <PageHorizontal
      title="Recruiter Manage Job offer"
      pageTitle="Something new ?"
      imgUrl="/writing-1149962_1920.jpg"
      childrenSize="w-75"
    >
      <div className="px-3 pb-2" style={{ height: '650px', overflow: 'auto' }}>
        <JobThumbnail />
        <JobThumbnail />
        <JobThumbnail />
        <JobThumbnail />
        <JobThumbnail />
      </div>
    </PageHorizontal>
  )
}

export default ManageJob
