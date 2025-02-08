
'use client';

import { useWearHook } from "@/Context/Context";
import { poppins } from "@/Utils/helper/helper";

function TrackingError() {
    const {trackError} = useWearHook();
  return (
    <div className={`${poppins.className} mx-auto my-8 bg-red-400 border-2 rounded-md border-red-300 py-2 px-6 w-[500px] max-[530px]:w-[90%] text-sm max-[300px]:text-[12px]`}>
      {trackError}
    </div>
  )
}

export default TrackingError
