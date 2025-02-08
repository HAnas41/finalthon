'use client';
import React from 'react'
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { clothList, poppins } from '@/Utils/helper/helper';
import { useWearHook } from '@/Context/Context';


function ProdDetail({id}:{id:string}) {
  const {backupList} = useWearHook();
  const productDetail = backupList.find((e) => {
    return e.id === id;
  });
 if(productDetail){
  return (
    <section className={`${poppins.className} flex justify-evenly items-center bg-[#fafafa] pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={productDetail.productimg} name={productDetail.productname}  />
      <ProductImgContent name={productDetail.productname} color={productDetail.productcolors} price={productDetail.price}/>
    </section>
  )
 }
}

export default ProdDetail
