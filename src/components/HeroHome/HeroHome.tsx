import React from 'react'
import HeroHomeContent from '../HeroHomeContent/HeroHomeContent'
import { poppins } from '@/Utils/helper/helper'



function HeroHome() {
  return (
    <section className={`hero-sec ${poppins.className} h-screen flex items-center`}>
      <HeroHomeContent/>
    </section>
  )
}

export default HeroHome