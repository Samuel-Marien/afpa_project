import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Col from 'react-bootstrap/Col'

import PageHorizontal from '../components/PageHorizontal'
import NavBar2 from '../components/NavBar2'

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
      <Form.Label column lg="3" className="d-none d-lg-block">
        {type}
      </Form.Label>
      <Form.Control
        plaintext
        readOnly={readOnly}
        defaultValue={defaultValue}
        className={className}
        placeholder={placeholder || type}
        as={as}
        rows={rows}
      />
      {children}
    </div>
  )
}
console.log(MyInput)
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
    <InputGroup className="w-100 my-1">
      <Form.Control type="text" placeholder="Skills" />
      <InputGroup.Append
        as="select"
        className="text-info border-left-0 border-info bg-dark rounded"
      >
        <option>0</option>
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
      </InputGroup.Append>
    </InputGroup>
  )
}

const UpLoadUrl = (props) => {
  return (
    <InputGroup className="w-100 my-1">
      <Form.Control type="text" placeholder="twitter, github..." />
      <InputGroup.Append role="button" className="text-info rounded">
        <Button className="d-flex text-light btn-info">
          <ImUpload size={15} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

const StudentId = (props) => {
  return (
    <PageHorizontal title="Student id setting" imgUrl="/tools-5669031_1920.jpg">
      <div className="mt-4 pt-4">
        <NavBar2 />
      </div>
      <div className="bg-transparent p-1 p-sm-4 px-lg-5 rounded shadow my-4 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Student id setting
        </div>
        <Form className="bg-light p-2 rounded">
          <Form.Group className="d-flex flex-column flex-sm-row align-items-center">
            <div className="d-flex flex-column align-items-center w-25 mr-3">
              <Link href="/studentSignUpPage">
                <a href="#" className="">
                  <GiSchoolBag
                    size="100"
                    className="rounded-circle text-secondary shadow "
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
              <div className="d-none d-lg-block">
                <MyInput
                  type={'Name'}
                  defaultValue={'John'}
                  readOnly={'readOnly'}
                >
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
              </div>

              <div className="d-block d-lg-none">
                <MyInput defaultValue={'John'} readOnly={'readOnly'}>
                  <MyLink />
                </MyInput>
                <MyInput defaultValue={'Doe'} readOnly={'readOnly'}>
                  <MyLink />
                </MyInput>
                <MyInput
                  defaultValue={'john.doe@example.com'}
                  readOnly={'readOnly'}
                >
                  <MyLink />
                </MyInput>
                <MyInput defaultValue={'06.06.06.06.06'} readOnly={'readOnly'}>
                  <MyLink />
                </MyInput>
                <MyInput
                  defaultValue={'Frontend/React/Node.Js'}
                  readOnly={'readOnly'}
                >
                  <MyLink />
                </MyInput>
              </div>
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
              placeholder={'Current job...'}
              className={'bg-white shadow-sm rounded p-1 mt-2'}
            />
            <MyInput
              type={'Citation:'}
              placeholder={'in a few words...'}
              className={'bg-white shadow-sm rounded p-1 mt-2'}
            />
            <MyInput
              type={'You are:'}
              placeholder={'About you...'}
              className={'bg-white shadow-sm rounded p-1 mt-2'}
              as="textarea"
              rows={6}
            />
          </Form.Group>

          <Form.Group className="p-3 rounded shadow-sm px-4 border-top border-bottom border-info pt-4">
            <Form.Group className="d-flex mb-3">
              <div className="d-flex">
                <Form.Label className="w-25">Skills:</Form.Label>
                <div className="">
                  <Form.Row className="mb-0">
                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>
                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>
                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>

                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>
                    <Col xs={12} md={4}>
                      <SkillsRange />
                    </Col>
                  </Form.Row>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="d-flex mb-3">
              <div className="d-flex">
                <Form.Label className="w-25">Web:</Form.Label>
                <Form.Row className="mb-0">
                  <Col xs={12} sm={4}>
                    <UpLoadUrl />
                  </Col>
                  <Col xs={12} sm={4}>
                    <UpLoadUrl />
                  </Col>
                  <Col xs={12} sm={4}>
                    <UpLoadUrl />
                  </Col>
                </Form.Row>
              </div>
            </Form.Group>
          </Form.Group>
          <Form.Group className="d-flex justify-content-end border-top">
            <Button
              variant="outline-info"
              type="submit"
              className="w-25 mt-3 shadow-sm"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </PageHorizontal>
  )
}

StudentId.propTypes = {
  companyLogo: PropTypes.string
}

export default StudentId
