import React from 'react'

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const DevTool = (props) => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="dev_tool"
      variant=""
      style={{ opacity: '.2' }}
    >
      <Dropdown.Item href="/SignIn">sign in</Dropdown.Item>
      <Dropdown.Item href="/forgotPswdPage">forgot pswd</Dropdown.Item>
      <Dropdown.Item href="/newPswdPage">new pswd</Dropdown.Item>
      <Dropdown.Item href="/reinitPswd">re-init pswd</Dropdown.Item>
      <Dropdown.Item href="/recruiterJobOfferPage">
        recruiter job offer
      </Dropdown.Item>
      <Dropdown.Item href="/recruiterManageJobPage">
        manage job offer
      </Dropdown.Item>
      <Dropdown.Item href="/settingRecruiterPage">
        recruiter setting
      </Dropdown.Item>
      <Dropdown.Item href="/settingStudentPage">student setting</Dropdown.Item>
      <Dropdown.Item href="/settingTeacherPage">teacher setting</Dropdown.Item>

      <Dropdown.Item href="/selectRolePage">
        select role before sigup
      </Dropdown.Item>
      <Dropdown.Item href="/studentSignUpPage">student sign up</Dropdown.Item>
      <Dropdown.Item href="/teacherSignUpPage">teacher sign up</Dropdown.Item>
      <Dropdown.Item href="/recruiterSignUpPage">
        recruiter sign up
      </Dropdown.Item>
      <Dropdown.Item href="/studentIdPage">student Id setting</Dropdown.Item>
      <Dropdown.Item href="/studentVisualIdPage">student Id</Dropdown.Item>
      <Dropdown.Item href="/jobOfferPage">job Offer</Dropdown.Item>
      <Dropdown.Item href="/messagePage">message Page</Dropdown.Item>
      <Dropdown.Item href="/directoryPage">directory Page</Dropdown.Item>
      <Dropdown.Item href="/networksPage">networks Page</Dropdown.Item>
    </DropdownButton>
  )
}

export default DevTool
