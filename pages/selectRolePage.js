import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import CircleIconStudent from '../components/CircleIconStudent'
import CircleIconTeacher from '../components/CircleIconTeacher'
import CircleIconRecruiter from '../components/CircleIconRecruiter'
import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

const SelectRole = (props) => {
  return (
    <PageHorizontal
      title="Select role"
      pageTitle="You are..."
      imgUrl="/startup-593341_1920.jpg"
    >
      <div className="mt-5 pt-5">
        <NavBarPageHorizontal />
      </div>
      <div className="container d-flex mt-5">
        <CircleIconStudent />
        <CircleIconTeacher />
        <CircleIconRecruiter />
      </div>
    </PageHorizontal>
  )
}

export default SelectRole
