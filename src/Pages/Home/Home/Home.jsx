import React from 'react'
import Banner from '../Banner/Banner'
import Works from '../Works/Works'
import Services from '../Services/Services'
import MarqueeBrandLogo from '../MarqueeBrandLogo/MarqueeBrandLogo'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import Merchant from '../Merchant/Merchant'
import AskedQuestion from '../AskedQuestion/AskedQuestion'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <MarqueeBrandLogo></MarqueeBrandLogo>
      <WhyChooseUs></WhyChooseUs>
      <Merchant></Merchant>
      <AskedQuestion></AskedQuestion>
    </div>
  )
}

export default Home