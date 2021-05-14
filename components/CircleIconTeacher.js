import Link from 'next/link'
import React from 'react'

import { GiSpellBook } from 'react-icons/gi'

const CircleIconTeacher = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link href="/teacherSignUpPage">
        <a href="#">
          <GiSpellBook
            size="100"
            className="rounded-circle p-1 mx-5 text-secondary shadow"
          />
        </a>
      </Link>
      <h3 className="mt-2">Teacher</h3>
    </div>
  )
}

export default CircleIconTeacher
