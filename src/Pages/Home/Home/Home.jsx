import React from 'react'
import Banner from '../Banner/Banner'
import Works from '../Works/Works'
import Services from '../Services/Services'
import MarqueeBrandLogo from '../MarqueeBrandLogo/MarqueeBrandLogo'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <MarqueeBrandLogo></MarqueeBrandLogo>
    </div>
  )
}

export default Home