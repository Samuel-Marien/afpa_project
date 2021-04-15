import React from 'react'

import Link from 'next/link'

import PageHorizontal from '../components/PageHorizontal'
import ConnectForm from '../components/ConnectForm'
import Button from 'react-bootstrap/Button'

import NavBar from '../components/NavBar'

const SignInPage = () => {
  return (
    <PageHorizontal title="Sign In" imgUrl="/coffee-5132832_1920.jpg">
      <div className="mt-5 pt-5">
        <NavBar />
      </div>
      <div className="bg-light p-4 rounded shadow my-3 my-md-1">
        <div className="d-flex justify-content-center h2 border-bottom border-info pb-3 mb-3">
          Sign-In
        </div>
        <ConnectForm />
        <div className="mt-5 text-center bg-light p-3 shadow rounded">
          <h5>I have no client space</h5>
          <p>
            Create your customer area in just a few clicks... and come to your
            home
          </p>
          <Link href="/selectRolePage">
            <a>
              <Button
                variant="info"
                type="submit"
                className="w-100 rounded-pill"
              >
                Create a customer area
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </PageHorizontal>
  )
}
export default SignInPage
