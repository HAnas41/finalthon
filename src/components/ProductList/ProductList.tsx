'use client'
import Card from '../Card/Card';
import { poppins } from '@/Utils/helper/helper';
import { useWearHook } from '@/Context/Context';
 
function ProductList() {
  const {productList} = useWearHook();
  return (
    <section className={`${poppins.className} pt-10 flex justify-center flex-wrap gap-12`}>
      {
        productList.map((e) => {
          return(
            <Card key={e.id} clothlist={e}/>
          );
        })
      }
    </section>
  )
}

export default ProductList
