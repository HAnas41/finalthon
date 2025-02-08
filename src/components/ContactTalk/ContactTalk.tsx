import React from 'react'
import ContactTalkDetail from '../ContactTalkDetail/ContactTalkDetail'
import { poppins } from '@/Utils/helper/helper'



function ContactTalk() {
  return (
    <section className={`${poppins.className} flex justify-center py-14 text-center`}>
      <ContactTalkDetail/>
    </section>
  )
}

export default ContactTalk