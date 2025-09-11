import React,{useContext} from 'react'
import { Menu, X } from 'lucide-react'
import SidebarContext from '../../../Context/sidebar/SidebarContext'

const Navbar = () => {
  const { sidebar, showSidebar } = useContext(SidebarContext)
  return (
    <div className='w-full flex justify-end px-10 py-2'>
        <button onClick={()=>showSidebar(prev=>!prev)} className='p-4 transition duration-300 ease-in-out lg:hidden'>{sidebar ? (<X />) : (<Menu />) }</button>
    </div>
  )
}

export default Navbar