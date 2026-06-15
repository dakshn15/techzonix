import usePageTitle from '../../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Login from '../../components/Auth/Login'

function LoginPage() {
  usePageTitle("Sign In");
  return (
    <>
        <CommonBanner title={"Login"} />
        <Login />
    </>
  )
}

export default LoginPage