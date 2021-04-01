import React from 'react'

import PageHorizontal from '../components/PageHorizontal'
import ConnectForm from '../components/ConnectForm'
import Button from 'react-bootstrap/Button'

import Link from 'next/link'

const SignInPage = () => {
  return (
    <PageHorizontal
      title="Sign In"
      pageTitle="Sign in"
      imgUrl="/coffee-5132832_1920.jpg"
    >
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
              variant="secondary"
              type="submit"
              className="w-100 rounded-pill"
            >
              Create a customer area
            </Button>
          </a>
        </Link>
      </div>
    </PageHorizontal>
  )
}
export default SignInPage
