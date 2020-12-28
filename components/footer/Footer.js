import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import './Footer.scss'

const Footer = props => {
  return (
    <div className='footer'>
      <div>
        <div className='logo'>RANDOM</div>
        <div>
          &copy; {new Date().getFullYear()} ToolsNhanh. All rights reserved.
        </div>
      </div>
      <div>
        <div>Follow Us</div>
        <div className='icon'>
          <Link href='https://www.facebook.com/Tools-Nhanh-104479844915184'>
            <h3>
              <FaFacebook />
            </h3>
          </Link>
          <Link href='https://www.facebook.com/min.5674193'>
            <h3>
              <FaInstagram />
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer
