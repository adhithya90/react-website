import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero"> 
        <div className="HeroGroup">
          <h1>I design experiences</h1>
          <p>that bridges the gap between technology and human interpretation. </p>
          <p>Designer at Google.</p>
          <Link to="/page-2/">Read More</Link>
        </div>
    </div>
  </div>
)

export default IndexPage
