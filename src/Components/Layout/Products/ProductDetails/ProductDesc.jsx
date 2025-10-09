import React from 'react'
import { Star } from 'lucide-react'

const ProductDesc = ({description,brand,rating,stock,isFeatured}) => {
  return (
    <div className='flex py-4 border flex-wrap gap-y-6 justify-between px-6 border-gray-300 rounded-lg'>
       <div className='flex flex-col'>
        <h2 className='title'>Descripition</h2>
        <p className='text-lg'>{description}</p>
        </div> 
        <ul className=' text-lg flex  flex-col px-8 '>
            <li className='flex gap-6' ><span className='title'>Brand</span> {brand}</li>
            <li className='flex gap-6' ><span className='title'>Ratings </span> {rating.average}({rating.count})</li>
            <li className='flex gap-6' ><span className='title'>Stock</span> {stock}</li>
            <li className='flex gap-6' ><span className='title'>Featured</span> {isFeatured ? "Yes" : "No"}</li>
        </ul>
    </div>
  )
}

export default ProductDesc