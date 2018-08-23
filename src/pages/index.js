import React from 'react'
import Link from 'gatsby-link'

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
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="178"><path fill="#FF7744">
      <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values ="
      M 0 0 L 1036 0 C 1036 0 965 178 609 178 C 253 178 0 0 0 0 Z;

      M 0.152 0 L 1036.152 0 C 1036.152 0 694.152 173 338.152 173 C -17.848 173 0.152 0 0.152 0 Z;

      M 0 0 L 1036 0 C 1036 0 965 178 609 178 C 253 178 0 0 0 0 Z      
      " 
    />
    
    </path></svg> */}
  </div>
)

export default IndexPage
