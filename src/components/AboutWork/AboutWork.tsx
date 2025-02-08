import React from 'react'
import AboutWorkContent from '../AboutWorkContent/AboutWorkContent'
import { poppins } from '@/Utils/helper/helper'
import AboutWorkImg from '../AboutWorkImage/AboutWorkImage'
// import AboutWorkImg from '../AboutWorkImg/AboutWorkImg'
// import { poppins } from '@/utils/Helper/helper'

function AboutWork() {
  return (
    <section className={`${poppins.className} flex justify-center`}>
      <AboutWorkContent/>
      <AboutWorkImg/>
    </section>
  )
}

export default AboutWork