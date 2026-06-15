import usePageTitle from '../../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../../components/Common/CommonBanner'
import Account from '../../components/Auth/Account'

function AccountPage() {
  usePageTitle("My Account");
  return (
    <>
        <CommonBanner title={"My account"} />
        <Account />
    </>
  )
}

export default AccountPage