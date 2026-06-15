import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'

function PrivacyPage() {
  usePageTitle("Privacy Policy");
  return (
    <>
        <CommonBanner title={"privacy policy"} />
        <PrivacyPolicy />
    </>
  )
}

export default PrivacyPage