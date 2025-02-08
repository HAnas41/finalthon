import React from 'react'

function ProductFilter() {
  return (
    <form className='flex gap-5'>
      <select name="" id="" className='py-3 px-3 bg-[#f9f9f9] outline-none rounded-sm'>
        <option value="Popularity" defaultValue={`Popularity`} disabled>Popularity</option>
        <option value="jackets">Jackets</option>
        <option value="Crewnecks">Crewnecks</option>
      </select>
      <button className='bg-[#23a6f0] px-6 text-white rounded-md'>Filter</button>
    </form>
  )
};
export default ProductFilter;