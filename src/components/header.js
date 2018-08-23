import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to ="/"><img src={require('../images/ad_logo.png')} width="60" /></Link>
    </div>
  </div>
)

export default Header
