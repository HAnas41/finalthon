
import React from 'react'
import TrialSectionCont from '../TrialSectionCont/TrialSectionCont'
import { poppins } from '@/Utils/helper/helper'



function TrialSection() {
  return (
    <section className={`${poppins.className} py-20`}>
      <TrialSectionCont/>
    </section>
  )
}

export default TrialSection
