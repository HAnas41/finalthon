

import {poppins} from '@/Utils/helper/helper';
import React from 'react'

function Logo() {
  return (
    <div className={`${poppins.className} max-[800px]:absolute left-5 top-4`}>
      <h1 className='text-2xl'>Wearista</h1>
    </div>
  );
}
export default Logo;