import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import CommonBanner from '../components/Common/CommonBanner'
import Checkout from '../components/Checkout/Checkout'

function CheckoutPage() {
  usePageTitle("Checkout");
    return (
        <>
            <CommonBanner title="Checkout" />
            <Checkout />
        </>
    )
}

export default CheckoutPage