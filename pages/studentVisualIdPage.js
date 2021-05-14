import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

import PageHorizontal from '../components/PageHorizontal'
import NavBar2 from '../components/NavBar2'

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlinePhone
} from 'react-icons/ai'

import { IoIosMail } from 'react-icons/io'

const MyProgressBar = (props) => {
  const { now, children } = props
  return (
    <div>
      <p
        className="m-0 p-0 ml-2 font-weight-bold h6"
        style={{ transform: 'translateY(120%)' }}
      >
        {children}
      </p>

      <ProgressBar
        variant={'info'}
        now={now}
        animated
        style={{ height: '30px' }}
      ></ProgressBar>
    </div>
  )
}

MyProgressBar.propTypes = {
  children: PropTypes.string,
  now: PropTypes.number
}

const VisualId = () => {
  return (
    <PageHorizontal title="Student Id" imgUrl="/students.jpg">
      <div className="mt-5 pt-5">
        <NavBar2 />
      </div>

      <div className=" bg-light shadow d-flex flex-column flex-lg-row rounded">
        <div className="bg-dark px-2">
          <div className="container fluid d-flex justify-content-center pt-2">
            <Image
              src="/portraits/female-102.jpg"
              roundedCircle
              fluid
              thumbnail
            />
          </div>

          <div className="mt-4 mb-2">
            <Link href="#">
              <a className="text-info d-flex">
                <IoIosMail size={15} />
                <span className="ml-2" style={{ fontSize: '.8rem' }}>
                  john_doe@doe.com
                </span>
              </a>
            </Link>
            <p className="text-info d-flex">
              <AiOutlinePhone size={15} />
              <span className="ml-2" style={{ fontSize: '.8rem' }}>
                06.06.06.06.06
              </span>
            </p>
            <div className="border-top border-info pt-3">
              <Link href="#">
                <a className="text-info d-flex">
                  <AiFillGithub size={15} />
                  <span className="ml-2" style={{ fontSize: '.8rem' }}>
                    gitub.com/john_doe
                  </span>
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <Link href="#">
                <a className="text-info d-flex">
                  <AiFillTwitterCircle size={15} />
                  <span className="ml-2" style={{ fontSize: '.8rem' }}>
                    twitter.com/john_doe
                  </span>
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <Link href="#">
                <a className="text-info d-flex">
                  <AiFillLinkedin size={15} />
                  <span className="ml-2" style={{ fontSize: '.8rem' }}>
                    linkedin.com/john_doe
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-secondary text-light p-2 ">
          <div>
            <div className="d-none d-md-block">
              <h1
                className="font-weight-bold mb-0 text-dark d-flex justify-content-center align-items-baseline"
                style={{ fontSize: '7rem' }}
              >
                Janne
                <span
                  className="font-weight-light text-light"
                  style={{ fontSize: '4rem' }}
                >
                  Doe
                </span>
              </h1>
            </div>
            <div className="d-block d-md-none">
              <h1
                className="font-weight-bold mb-0 text-dark d-flex justify-content-center align-items-baseline"
                style={{ fontSize: '4rem' }}
              >
                Janne
                <span
                  className="font-weight-light text-light"
                  style={{ fontSize: '2rem' }}
                >
                  Doe
                </span>
              </h1>
            </div>
            <h6 className="d-flex justify-content-center">
              Is simply dummy text of the printing industry.
            </h6>
            <h2 className="text-dark d-flex justify-content-center font-weight-bold mb-5">
              Looking for fullstack job
            </h2>
            <h2
              className="font-weight-bold text-info d-none d-md-block"
              style={{
                fontSize: '2rem',
                position: 'absolute',
                transform: 'rotate(-90deg) translateY(-120%) translateX(-45px)'
              }}
            >
              Who{' '}
              <span
                className="font-weight-light text-light"
                style={{ fontSize: '2rem' }}
              >
                I&apos;am
              </span>
            </h2>
            <div className="d-flex justify-content-center">
              <p className="w-100 pl-0 pl-md-5">
                Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500. Is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500.Is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500
              </p>
            </div>
          </div>

          <div className="d-flex flex-column mt-4">
            <div
              style={{ transform: 'translateY(35%)' }}
              className=" bg-secondary w-25 border-right border-left border-info rounded align-self-center"
            >
              <h2 className="text-center text-dark font-weight-bold h3">
                Skills
              </h2>
            </div>
            <div className="container d-flex flex-column flex-md-row justify-content-between border-top border-info">
              <div className="w-100 pr-0 pr-md-3 mt-4">
                <MyProgressBar now={100}>html</MyProgressBar>
                <MyProgressBar now={75}>CSS</MyProgressBar>
                <MyProgressBar now={50}>JavaScript</MyProgressBar>
              </div>
              <div className="w-100 pl-0 pl-md-3 mt-0 mt-md-4">
                <MyProgressBar now={80}>Node.Js</MyProgressBar>
                <MyProgressBar now={75}>React.Js</MyProgressBar>
                <MyProgressBar now={50}>html</MyProgressBar>
              </div>
            </div>
          </div>
          <div className="border-top border-info mt-4 d-flex justify-content-end">
            <Button
              variant="outline-info btn-dark"
              type="submit"
              className="mt-3 mb-2 px-4 shadow-sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </PageHorizontal>
  )
}

export default VisualId
