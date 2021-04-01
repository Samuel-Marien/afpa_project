import React from 'react'

import Link from 'next/link'

import { GiSuitcase } from 'react-icons/gi'

const CircleIconRecruiter = (props) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link href="/recruiterSignUpPage">
        <a href="#">
          <GiSuitcase
            size="100"
            className="rounded-circle p-1 mx-5 text-secondary shadow"
          />
        </a>
      </Link>

      <h3 className="mt-2">Recruiter</h3>
    </div>
  )
}

export default CircleIconRecruiter
