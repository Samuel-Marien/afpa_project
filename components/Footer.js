import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import Logo from './Logo'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin
} from 'react-icons/io5'

const MyLi = (props) => {
  const { href, nameLink } = props
  return (
    <li
      style={{
        fontSize: '.8rem',
        listStyle: 'none'
      }}
      className="decoration-none"
    >
      <Link href={href}>
        <a className="text-secondary">{nameLink}</a>
      </Link>
    </li>
  )
}

MyLi.propTypes = {
  href: PropTypes.string
}

MyLi.propTypes = {
  nameLink: PropTypes.string
}

const Footer = (props) => {
  return (
    <div className="bg-dark text-light d-flex justify-content-center p-3">
      <div className="w-75 d-flex flex-column">
        <div className=" d-flex justify-content-between py-5 border-bottom border-info mb-5 mt-2">
          <Logo size={80} titleStyle="h1 font-weight-bold ml-3" />
          <div className="d-flex justify-content-between">
            <ul className="mr-4 ">
              <h6>Mobile App</h6>
              <MyLi href={'#'} nameLink={'App store'} />
              <MyLi href={'#'} nameLink={'Goole play'} />
              <MyLi href={'#'} nameLink={'Microsoft store'} />
            </ul>
            <ul className="mr-4 ">
              <h6>Communauty</h6>
              <MyLi href={'#'} nameLink={'Twinter'} />
              <MyLi href={'#'} nameLink={'Linkedin'} />
              <MyLi href={'#'} nameLink={'Instagram'} />
              <MyLi href={'#'} nameLink={'FaceBook'} />
            </ul>
            <ul>
              <h6>Company</h6>
              <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
              <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
              <MyLi href={'#'} nameLink={'Lorem Ipsum'} />
            </ul>
          </div>
        </div>
        <div className="text-secondary d-flex justify-content-between">
          <p>© Afpa ‘Lumni’IT 2021. We love our users!</p>
          <div className="text-secondary d-flex justify-content-between">
            <p className="mr-3">Follow us !</p>
            <Link href="#">
              <a className="text-secondary mr-3">
                <IoLogoTwitter size={25} />
              </a>
            </Link>
            <Link href="#">
              <a className="text-secondary mr-3">
                <IoLogoInstagram size={25} />
              </a>
            </Link>
            <Link href="#">
              <a className="text-secondary mr-3">
                <IoLogoFacebook size={25} />
              </a>
            </Link>
            <Link href="#">
              <a className="text-secondary">
                <IoLogoLinkedin size={25} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
