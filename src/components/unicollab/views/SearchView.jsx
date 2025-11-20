import React from 'react';
import Layout from '../layout/Layout';
import PostBrowser from '../components/PostBrowser';

const SearchView = () => {
  return (
    <Layout>
      <PostBrowser createPost contentType="posts" />
    </Layout>
  );
};

export default SearchView;
