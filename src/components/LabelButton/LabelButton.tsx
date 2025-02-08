'use client';

import { useWearHook } from "@/Context/Context";
import { poppins } from "@/Utils/helper/helper";



function LabelButton() {
    const {onCreatingLabel,loading} = useWearHook();
  return (
    <button className={`${poppins.className} bg-teal-400 text-white p-3 rounded-md`} onClick={onCreatingLabel} disabled={loading}>{loading ? 'Creating Label...' :'Create Label'}</button>
  )
}

export default LabelButton