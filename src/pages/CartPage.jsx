import usePageTitle from '../hooks/usePageTitle';
import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import CartSection from "../components/Cart/CartSection";

const CartPage = () => {
  usePageTitle("Shopping Cart");
  return (
    <>
      <CommonBanner title="Your Cart" />
      <CartSection />
    </>
  );
};

export default CartPage;
