import usePageTitle from '../hooks/usePageTitle';
import React from "react";
import CommonBanner from "../components/Common/CommonBanner";
import BlogList from "../components/BlogList/BlogList";

const BlogPage = () => {
  usePageTitle("Tech Blog");
  return (
    <>
      <CommonBanner title="Blogs" />
      <BlogList />
    </>
  );
};

export default BlogPage;
