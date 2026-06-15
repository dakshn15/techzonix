import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import Faq from '../components/Faq/Faq'

function FaqPage() {
  usePageTitle("FAQ");
  return (
    <>
        <CommonBanner title={"Frequently asked questions"} />
        <Faq />
    </>
  )
}

export default FaqPage