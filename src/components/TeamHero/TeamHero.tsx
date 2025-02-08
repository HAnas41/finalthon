import React from 'react'
import TeamHeroImg from '../TeamHeroImg/TeamHeroImg'

import TeamHeroCont from '../TeamHeroCont/TeamHeroCont'
import { poppins } from '@/Utils/helper/helper'

function TeamHero() {
  return (
    <section className={`${poppins.className} py-10 flex flex-col items-center`}>
       <TeamHeroCont />
      <TeamHeroImg/>
    </section>
  )
}

export default TeamHero