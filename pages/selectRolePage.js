import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconStudent from '../components/CircleIconStudent'
import CircleIconTeacher from '../components/CircleIconTeacher'
import CircleIconRecruiter from '../components/CircleIconRecruiter'
import NavBar from '../components/NavBar'

const SelectRole = (props) => {
  return (
    <PageHorizontal title="Select role" imgUrl="/startup-593341_1920.jpg">
      <div className="mt-5 pt-5">
        <NavBar />
      </div>
      <div className="bg-light p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          You are...
        </div>
        <div className="container d-flex flex-column flex-sm-row mt-5">
          <CircleIconStudent />
          <CircleIconTeacher />
          <CircleIconRecruiter />
        </div>
      </div>
    </PageHorizontal>
  )
}

export default SelectRole
