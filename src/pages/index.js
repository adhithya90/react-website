import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="Hero"> 
        <div className="HeroGroup">

          
          <h1 className="HeroCommon HeroHeader">I design experiences</h1>
          <p className="HeroCommon HeroDescription">that bridges the gap between technology and human interpretation. </p>

          <Link to="/page-2/" className="HeroLink">My design philosophy</Link>
          <Link to="/page-2/" className="HeroLink">My work</Link>
          <Link to="/page-2/" className="HeroLink">My writing</Link>
        </div>
    </div>
    <div className="Cards">
      <Card
        title= "ODns Onboarding Experience"
        image={require('../images/odnsonboarding.png')} />

      <Card
        title= "ODns Onboarding Experience"
        image={require('../images/odnsonboarding.png')} />  
    </div>
  </div>
)

export default IndexPage
