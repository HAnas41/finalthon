
import React from 'react'
import Card from '../Card/Card'

import { useWearHook } from '@/Context/Context'


function HomeSellerList() {
    const {filtPopCategory} = useWearHook();
  return (
    <div className='flex justify-center gap-12 items-center flex-wrap pt-10'>
      {
        filtPopCategory.map((e) => {
            return(
                <Card key={e.id} clothlist={e}/>
            )
        })
      }
    </div>
  )
}

export default HomeSellerList