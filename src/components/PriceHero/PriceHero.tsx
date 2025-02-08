

import React from 'react'
import PriceHeroCont from '../PriceHeroCont/PriceHeroCont'
import PriceList from '../PriceList/PriceList'
import { poppins } from '@/Utils/helper/helper'


function PriceHero() {
  return (
    <section className={`${poppins.className} flex  flex-col items-center text-center bg-[#fafafa]`}>
      <PriceHeroCont/>
      <PriceList/>
    </section>
  )
}

export default PriceHero
