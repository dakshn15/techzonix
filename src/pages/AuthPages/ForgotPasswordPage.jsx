import usePageTitle from '../../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import ForgotPassword from '../../components/Auth/ForgotPassword'

function ForgotPasswordPage() {
  usePageTitle("Forgot Password");
  return (
    <>
        <CommonBanner title={"Forgot Password"} />
        <ForgotPassword />
    </>
  )
}

export default ForgotPasswordPage