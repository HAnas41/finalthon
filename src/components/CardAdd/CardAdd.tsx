'use client';

import { useWearHook } from "@/Context/Context";

// import { useEcomHook } from "@/Context/Context";
// import { rubikBuble } from "@/utils/Helper/helper";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

function CardAddSubt({productId,quantity}:{productId:number,quantity:number}) {
  const {addProdDec,addProdInc} = useWearHook();
  return (
    <div className={`flex flex-col `}>
      <button className='size-[40px] flex justify-center items-center  hover:text-white border-[#8de0b4] border-2 max-[1060px]:size-[35px] max-[597px]:size-[40px] max-[380px]:size-[30px]' onClick={() => addProdDec(productId,quantity)}><FiMinus /></button>
      <p className={` size-[40px] border-[#8de0b4] border-2 text-center pt-1 max-[1060px]:size-[35px] max-[597px]:size-[40px] max-[380px]:size-[30px]`}>{quantity}</p>
      <button className='size-[40px] flex justify-center items-center  hover:text-white border-[#8de0b4] border-2 max-[1060px]:size-[35px] max-[597px]:size-[40px] max-[380px]:size-[30px]'  onClick={() => addProdInc(productId)}><GoPlus /></button>
    </div>
  )
};
export default CardAddSubt;