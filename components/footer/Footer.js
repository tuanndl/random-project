import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MessengerChat } from '../facebook';

import './Footer.scss';

const Footer = (props) => {
  return (
    <>
      <div className='footer'>
        <div>
          <div className='logo'>TOOLS NHANH</div>
          <div>&copy; {new Date().getFullYear()} TOOLS NHANH. All rights reserved.</div>
        </div>
        <div>
          <div>Follow Us</div>
          <div className='icon'>
            <a href='https://www.facebook.com/Tools-Nhanh-104479844915184' target='__blank'>
              <h3>
                <FaFacebook />
              </h3>
            </a>
          </div>
        </div>
      </div>

      <MessengerChat />
    </>
  );
};

Footer.propTypes = {};

export default Footer;
