import React from 'react'
import InboxListComp from './InboxListComp'
import inboxData from "./inbox.json"
import Pagination from "../../../Utilities/Pagination"

const RenderInbox = () => {
  return (
    <ul className='h-screen pb-56 w-full overflow-scroll pt-10 scrollbar-hidden'>
        <header className='text-lg w-full'> 
            <ul className='grid text-xl font-semibold border border-gray-500 px-4 py-6 rounded-t-2xl grid-cols-[100px_220px_250px_300px_1fr_120px_50px] w-full'>
                <li>Serial</li>
                <li>Favourites</li>
                <li>Name</li>
                <li>Email</li>
                <li>Message</li>
                <li>Role</li>
                <li></li>
            </ul>
</header>
        <Pagination data={inboxData}>
            
            {
                inboxData.map((message,index)=>(
                    <li key={index}><InboxListComp serial={index+1} inbox={message} /></li>
                ))
            }
        </Pagination>
    </ul>
  )
}

export default RenderInbox