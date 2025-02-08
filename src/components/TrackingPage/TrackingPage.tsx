'use client';
import TrackingForm from '../TrackingForm/TrackingForm'
// import ShipmentIdTrack from '../ShipmentIdTrack/ShipmentIdTrack'
// import { useEcomHook } from '@/Context/Context';
// import { rubikBuble } from '@/utils/Helper/helper';
import TrackingError from '../TrackingError/TrackingError';
import ShipmentIdTrack from '../ShipIdTrack/ShipIdTrack';
import { useWearHook } from '@/Context/Context';

function TrackingPage() {
    const {trackingData,trackError} = useWearHook();
  return (
    <section className='py-10 '>
        <h1 className={` text-3xl text-center pb-5`}>Track Your Shipment</h1>
      <TrackingForm/>
      {
        trackError ? <TrackingError/> :''
      }
      {
        trackingData ? <ShipmentIdTrack/> :''
      }
    </section>
  )
}

export default TrackingPage