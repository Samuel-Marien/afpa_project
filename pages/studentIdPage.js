import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import PageHorizontal from '../components/PageHorizontal'
import NavBarPageHorizontal from '../components/NavBarPageHorizontal'

import { IoIosSettings } from 'react-icons/io'
import { GiSchoolBag } from 'react-icons/gi'
import { ImUpload } from 'react-icons/im'

const MyInput = (props) => {
  const {
    type,
    defaultValue,
    className,
    readOnly,
    placeholder,
    as,
    rows,
    children
  } = props
  return (
    <div className="d-flex align-items-center">
      <Form.Label column sm="3">
        {type}
      </Form.Label>
      <Form.Control
        plaintext
        readOnly={readOnly}
        defaultValue={defaultValue}
        className={className}
        placeholder={placeholder}
        as={as}
        rows={rows}
      />
      {children}
    </div>
  )
}

MyInput.propTypes = {
  type: PropTypes.string
}

MyInput.propTypes = {
  defaultValue: PropTypes.string
}

MyInput.propTypes = {
  className: PropTypes.string
}

MyInput.propTypes = {
  children: PropTypes.string
}

MyInput.propTypes = {
  readOnly: PropTypes.string
}

MyInput.propTypes = {
  placeholder: PropTypes.string
}

MyInput.propTypes = {
  as: PropTypes.string
}

MyInput.propTypes = {
  rows: PropTypes.number
}

const MyLink = (props) => {
  return (
    <Link href="/settingStudentPage">
      <a>
        <IoIosSettings size={20} className="text-info" />
      </a>
    </Link>
  )
}

const SkillsRange = (props) => {
  return (
    <Form.Group className="d-flex w-100">
      <Form.Control
        type="text"
        placeholder="html"
        style={{ fontSize: '.8rem' }}
      />
      <Form.Control
        as="select"
        className="w-50 p-1 pl-1"
        style={{ fontSize: '.8rem' }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </Form.Control>
      <Button className="d-flex text-light ml-1 mr-3 btn-info shadow-sm">
        <ImUpload size={20} />
      </Button>
    </Form.Group>
  )
}

const StudentId = (props) => {
  return (
    <PageHorizontal
      title="Student id setting"
      pageTitle="Student id setting"
      imgUrl="/tools-5669031_1920.jpg"
      childrenSize="w-75"
    >
      <div className="mt-4 pt-4">
        <NavBarPageHorizontal />
      </div>
      <Form className="bg-light p-2 rounded" style={{ opacity: '.7' }}>
        <Form.Group className="d-flex">
          <div className="d-flex flex-column align-items-center w-25">
            <Link href="/studentSignUpPage">
              <a href="#">
                <GiSchoolBag
                  size="100"
                  className="rounded-circle text-secondary shadow"
                />
                <p
                  style={{ fontSize: '.6rem' }}
                  className="text-secondary text-center"
                >
                  change your photo
                </p>
              </a>
            </Link>
          </div>
          <Form.Group className="d-flex flex-column w-100 mb-0">
            <MyInput type={'Name'} defaultValue={'John'} readOnly={'readOnly'}>
              <MyLink />
            </MyInput>
            <MyInput
              type={'First name'}
              defaultValue={'Doe'}
              readOnly={'readOnly'}
            >
              <MyLink />
            </MyInput>
            <MyInput
              type={'email'}
              defaultValue={'john.doe@example.com'}
              readOnly={'readOnly'}
            >
              <MyLink />
            </MyInput>
            <MyInput
              type={'Phone'}
              defaultValue={'06.06.06.06.06'}
              readOnly={'readOnly'}
            >
              <MyLink />
            </MyInput>
            <MyInput
              type={'Speciality'}
              defaultValue={'Frontend/React/Node.Js'}
              readOnly={'readOnly'}
            >
              <MyLink />
            </MyInput>
          </Form.Group>
        </Form.Group>
        <Form.Group className="border-top">
          <MyInput
            type={'Dreaming job:'}
            placeholder={'I have a dream...'}
            className={'bg-white shadow-sm rounded p-1 mt-3'}
          />
          <MyInput
            type={'Current job:'}
            placeholder={'Frontend engineer/Afpa...'}
            className={'bg-white shadow-sm rounded p-1'}
          />
          <MyInput
            type={'Citation:'}
            placeholder={'in a few words...'}
            className={'bg-white shadow-sm rounded p-1'}
          />
          <MyInput
            type={'Presentation:'}
            placeholder={'About you...'}
            className={'bg-white shadow-sm rounded p-1'}
            as="textarea"
            rows={6}
          />
        </Form.Group>
        <Form.Group className="d-flex mb-0">
          <div className="d-flex ml-3">
            <Form.Label className="w-25 mr-4 ">Skills:</Form.Label>
            <div className="d-flex ml-4 ">
              <Form.Group className="mb-0">
                <div>
                  <SkillsRange />
                </div>
                <div>
                  <SkillsRange />
                </div>
              </Form.Group>
              <Form.Group>
                <div>
                  <SkillsRange />
                </div>
                <div>
                  <SkillsRange />
                </div>
              </Form.Group>

              <Form.Group>
                <div>
                  <SkillsRange />
                </div>
                <div>
                  <SkillsRange />
                </div>
              </Form.Group>
            </div>
          </div>
        </Form.Group>
        <Form.Group>
          <MyInput
            type={'My urls:'}
            placeholder={'jonh_do@twitter'}
            className={'bg-white shadow-sm rounded p-1 w-75'}
          >
            <Button className="d-flex text-light ml-4 px-4 btn-info">
              <ImUpload size={20} className="mr-2" />
              Up!
              <ImUpload size={20} className="ml-2" />
            </Button>
          </MyInput>
        </Form.Group>
        <Form.Group className="d-flex justify-content-end  border-top">
          <Button
            variant="outline-info"
            type="submit"
            className="w-25 mt-3 shadow-sm"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </PageHorizontal>
  )
}

StudentId.propTypes = {
  companyLogo: PropTypes.string
}

export default StudentId
