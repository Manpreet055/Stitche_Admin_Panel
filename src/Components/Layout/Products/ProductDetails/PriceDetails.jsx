import React from 'react'

const PriceDetails = ({price,discount}) => {
     const discountedPrice = (
        price -
        (discount * price) / 100
      ).toFixed(2);
  return (
    <div className='p-4 border border-gray-300 w-full flex flex-col gap-2 rounded-lg md:max-w-3xl'>
        <h3 className='title'>Price Details</h3>
    <ul className='flex flex-col gap-4'>
        <li className='flex gap-6'><span className='text-lg font-medium'>Original Price</span>{price}</li>
    <li className='flex gap-6'><span className='text-lg font-medium'>Disount</span>{discount}% OFF</li>
    <li className='flex gap-6'><span className='text-lg font font-medium'>Final Price</span>{discountedPrice}</li>
    </ul>
    </div>
  )
}

export default PriceDetails