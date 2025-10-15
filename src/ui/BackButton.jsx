import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const BackButton = () => {
    const navigate = useNavigate()
  return (
        <button onClick={()=>navigate(-1)} className=' w-fit flex items-center  group scale-transition'><span className='group-hover:translate-x-[-2px] duration-200 ease-in-out'><ChevronLeft /></span></button>
  )
}

export default BackButton