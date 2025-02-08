


import { pagin, poppins } from '@/Utils/helper/helper'
import React from 'react'

function Pagination() {
  return (
    <div className={`${poppins.className} pt-16 flex justify-center`}>
      {pagin.map((e) => {
        return(
            <button key={e.id} style={{backgroundColor:e.bgColor,color:e.color}} className='border-[#e9e9e9] border-2 rounded-md p-5 font-bold max-[330px]:p-4 max-[300px]:p-3'>{e.name}</button>
        )
      })}
    </div>
  )
}

export default Pagination
