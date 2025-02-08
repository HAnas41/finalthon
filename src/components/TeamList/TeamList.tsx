import React from 'react'
import AboutTeamCard from '../AboutTeamCard/AboutTeamCard';
import { teamList } from '@/Utils/helper/helper';


function TeamList() {
  return (
    <div className=' pt-10 flex justify-center items-center gap-14 flex-wrap'>
    {
      teamList.map((e,i) => {
          return(
              <AboutTeamCard key={i} teamCard={e}/>
          );
      })
    }
  </div>
  )
}

export default TeamList
