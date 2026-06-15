import usePageTitle from '../../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Register from '../../components/Auth/Register'

function RegisterPage() {
  usePageTitle("Create Account");
  return (
    <>
        <CommonBanner title={"register"} />
        <Register />
    </>
  )
}

export default RegisterPage