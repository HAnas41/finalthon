'use client'
import { poppins } from '@/Utils/helper/helper';

import { useRouter } from 'next/navigation';

import { FcPaid } from 'react-icons/fc'

function SuccessPage() {
  const homeNavig = useRouter();
  return (
    <section className={`${poppins.className} flex justify-center items-center h-screen bg-slate-400`}>

      <div className='bg-sky-600 flex flex-col items-center gap-3 p-5 text-sm border-4 border-dashed max-[310px]:w-[270px] max-[280px]:w-[250px]'>
      <FcPaid className='text-8xl'/>
      <h1 className={`text-center text-3xl uppercase  max-[600px]:text-2xl max-[330px]:text-xl`}>thank you for your purchase</h1>
      <p className='w-[600px] text-center max-[700px]:w-[500px] max-[600px]:w-[400px] max-[480px]:text-[13px] max-[480px]:w-[350px] max-[420px]:w-[300px] max-[370px]:text-[12px] max-[370px]:w-[250px] max-[280px]:text-[11px]'>Thank you for shopping with us! 🎊 Your order has been successfully placed, and we’re getting it ready for shipment.</p>
      <h5 className='text-center max-[600px]:w-[400px] max-[480px]:text-[13px] max-[480px]:w-[350px] max-[420px]:w-[300px] max-[370px]:text-[12px] max-[370px]:w-[250px] max-[280px]:text-[11px]'>We appreciate your trust in us and look forward to serving you again! 😊</h5>
      <button className='capitalize bg-sky-200 p-3 text-slate-50 rounded-md hover:animate-pulse' onClick={() => homeNavig.push('/generatetracking')}>generate tracking number</button>
      </div>
    </section>
  )
}

export default SuccessPage