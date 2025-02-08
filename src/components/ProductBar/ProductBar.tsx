import React from 'react'
import ProductCount from '../ProductCount/ProductCount'
import ProductView from '../ProductView/ProductView'

import ProductFilter from '../ProductFilter/ProductFilter'
import { poppins } from '@/Utils/helper/helper'

function ProductBar() {
  return (
    <section className={`${poppins.className} flex items-center justify-evenly py-5 flex-wrap max-[591px]:gap-4 max-[430px]:flex-col`}>
      <ProductCount/>
      <ProductView/>
      <ProductFilter/>
    </section>
  )
}

export default ProductBar