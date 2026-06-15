import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import CollectionListSection from "../components/CollectionList/CollectionList";
import usePageTitle from "../hooks/usePageTitle";

const CollectionListPage = () => {
  usePageTitle("Collections");
  return (
    <>
      <CommonBanner title="collection list" />
      <CollectionListSection />
    </>
  );
};

export default CollectionListPage;
