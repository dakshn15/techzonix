import usePageTitle from '../hooks/usePageTitle';
import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import Compare from "../components/Compare/Compare";

const ComparePage = () => {
  usePageTitle("Compare Products");
  return (
    <>
      <CommonBanner title="Compare" />
      <Compare />
    </>
  );
};

export default ComparePage;
