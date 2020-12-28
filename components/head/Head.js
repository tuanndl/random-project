import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const MyHead = (props) => {
  return (
    <Head>
      <title>Tools Nhanh</title>
      <meta name='title' content='my website' />
      <meta description='Here is the description' />
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Anton&display=swap'
        rel='stylesheet'
      ></link>
    </Head>
  );
};

MyHead.propTypes = {};

export default MyHead;
