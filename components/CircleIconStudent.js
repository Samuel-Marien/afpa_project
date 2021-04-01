import React from 'react'

import Link from 'next/link'

import { GiSchoolBag } from 'react-icons/gi'

const CircleIconStudent = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link href="/studentSignUpPage">
        <a href="#">
          <GiSchoolBag
            size="100"
            className="rounded-circle p-1 mx-5 text-secondary shadow"
          />
        </a>
      </Link>
      <h3 className="mt-2">Student</h3>
    </div>
  )
}

export default CircleIconStudent
