import usePageTitle from '../hooks/usePageTitle';
import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import Wishlist from "../components/Wishlist/Wishlist";

const WishlistPage = () => {
  usePageTitle("Wishlist");
  return (
    <>
      <CommonBanner title="wishlist" />
      <Wishlist />
    </>
  );
};

export default WishlistPage;
