import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import './Header.scss'

const Header = props => {
  return (
    <div className='header'>
      <div className='header--title'>RANDOM</div>
      <Link href='/wheel-name'>
        <a>Vòng Quay</a>
      </Link>
      <Link href='/'>
        <a>Quay Số</a>
      </Link>
      <div></div>
    </div>
  )
}

Header.propTypes = {}

export default Header
