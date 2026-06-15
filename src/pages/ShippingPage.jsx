import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import ShippingReturn from '../components/ShippingReturn/ShippingReturn'

function ShippingPage() {
  usePageTitle("Shipping & Returns");
  return (
    <>
        <CommonBanner title={"shipping return"} />
        <ShippingReturn />
    </>
  )
}

export default ShippingPage