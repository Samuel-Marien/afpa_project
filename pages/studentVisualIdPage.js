import React from 'react'

import Link from 'next/link'

import Image from 'react-bootstrap/Image'
import ProgressBar from 'react-bootstrap/ProgressBar'

import PageHorizontal from '../components/PageHorizontal'

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin
} from 'react-icons/ai'

const MyProgreeBar = (props) => {
  const { now } = props
  return (
    <div>
      <ProgressBar now={now} />
    </div>
  )
}

const VisualId = (props) => {
  return (
    <PageHorizontal
      title="Student Id"
      pageTitle="Student Id"
      imgUrl="/students.jpg"
      childrenSize={'w-100'}
    >
      <div className="bg-light p-2 d-flex rounded">
        <div className=" bg-dark w-25 p-2">
          <Image
            src="/portraits/female-102.jpg"
            roundedCircle
            fluid
            thumbnail
          />
          <div>
            <Link href="#">
              <a>john_doe@doe.com</a>
            </Link>
            <p>06.06.06.06.06</p>
            <div>
              <Link href="#">
                <a>
                  <AiFillGithub size={25} />
                  gitub.com/john_doe
                </a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>
                  <AiFillTwitterCircle size={25} />
                  twitter.com/john_doe
                </a>
              </Link>
            </div>
            <div>
              <Link href="#">
                <a>
                  <AiFillLinkedin size={25} />
                  linkedin.com/john_doe
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-75 border border-danger">
          <div>
            <h1>John Doe</h1>
            <h5>
              Is simply dummy text of the printing and typesetting industry.
            </h5>
            <h3>Looking for fullstack job</h3>
            <h2>Who I&apos;am</h2>
            <p>
              Is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500. Is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text ever since the 1500.Is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500
            </p>
          </div>
          <div>
            <MyProgreeBar now={20} />
          </div>
        </div>
      </div>
    </PageHorizontal>
  )
}

export default VisualId
