import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Head, Footer, Header } from '../index';

const Layout = (props) => {
  return (
    <Fragment>
      <Head />

      <Header />

      {props.children}

      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {};

export default Layout;
