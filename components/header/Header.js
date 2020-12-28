import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import './Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header--left'>TOOLS</div>
      <nav className='header--center'>
        <Link className='header-link' href='/'>
          <a className='header-link'>Quay Số</a>
        </Link>

        <Link href='/wheel-name'>
          <a className='header-link'>Vòng Quay</a>
        </Link>
      </nav>
      <div className='header--right'></div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
