'use client';

import { navList, poppins } from "@/Utils/helper/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList() {
    const activePath = usePathname();
  return (
    <ul className={`${poppins.className} flex gap-3 capitalize max-[800px]:flex-col`}>
      {navList.map((e) => {
        return <li className={`text-sm  ${activePath === e.link ? 'text-[#54b8f1] ' : ''} `} key={e.name}> <Link href={e.link}>{e.name}</Link> </li>
      })}
    </ul>
  )
}

export default NavList
