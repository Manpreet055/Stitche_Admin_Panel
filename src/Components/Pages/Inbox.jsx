import React from 'react'
import RenderInbox from '../Layout/Inbox/RenderInbox'
import SearchNavbar from "../Layout/Navbar/SearchNavbar"
import SearchBar from "../Layout/Navbar/SearchBar"
import FilterComp from '../Layout/Navbar/Filters'

const Inbox = () => {
  const filterMessages = [
    {
      name: "Status",
      fields: [
        {
          fieldName: "Starred",
          keyname: "starred",
        },
        {
          fieldName: "Read",
          keyname: "read",
        },
        {
          fieldName: "Unread",
          keyname: "unread",
        },
      ],
    },
    {
      name: "Priority",
      fields: [
        {
          fieldName: "High",
          keyname: "high",
        },
        {
          fieldName: "Medium",
          keyname: "medium",
        },
        {
          fieldName: "Low",
          keyname: "low",
        },
       
      ],
    },
  ];
  return (
    <div className='px-4 py-5'>
      <SearchNavbar searchBar={<SearchBar />} filter={<FilterComp fieldArr={filterMessages}/>} />
      <RenderInbox></RenderInbox>
    </div>
  )
}

export default Inbox