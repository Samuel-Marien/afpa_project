import React from 'react'
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'

import PageHorizontal from '../components/PageHorizontal'

import { IoTrash } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'

const MyP = (props) => {
  const { className, children } = props
  return (
    <p style={{ fontSize: '.7rem' }} className={className}>
      {children}
    </p>
  )
}

MyP.propTypes = {
  className: PropTypes.string
}

MyP.propTypes = {
  children: PropTypes.node
}

const JobThumbnail = (props) => {
  const { companyLogo = '/logos/logo-ibm.png' } = props
  return (
    <div className="bg-light mt-4 p-3 d-flex rounded shadow">
      <div className=" d-flex flex-column justify-content-start">
        <Image src={companyLogo} rounded />
        <MyP className="mt-2">Ville de Paris, France</MyP>
      </div>
      <div className="ml-4">
        <div className="d-flex justify-content-between">
          <MyP>job-number:666</MyP>
          <MyP>09.03.22</MyP>
          <div className="d-flex">
            <div>
              <IoTrash />
            </div>
            <div className="ml-2">
              <FiEdit />
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '.9rem' }}>
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&aposs standard dummy text ever since the
            1500...
          </p>
        </div>
      </div>
    </div>
  )
}

JobThumbnail.propTypes = {
  companyLogo: PropTypes.string
}

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
        <JobThumbnail />
      </div>
    </PageHorizontal>
  )
}

export default ManageJob
