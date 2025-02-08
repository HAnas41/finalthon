
'use client';

import TopContact from '../TopContact/TopContact'

import TopFollow from '../TopFollow/TopFollow'
import { usePathname } from 'next/navigation';
import TopOffer from '../TopOffer/TopOffer';
import { poppins } from '@/Utils/helper/helper';

function TopBar() {
  const colroPath = usePathname();
  return (
    <aside className={`${poppins.className} flex justify-evenly py-3 text-sm ${colroPath === '/' ? 'bg-[#252b42]' : 'bg-[#23856d]'} text-white max-[600px]:justify-center`}>
      <TopContact/>
      <TopOffer/>
      <TopFollow/>
    </aside>
  )
};
export default TopBar;
