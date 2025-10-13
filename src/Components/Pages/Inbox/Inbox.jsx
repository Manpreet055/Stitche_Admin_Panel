import React from 'react'
import AllMessages from "../../Layout/Inbox/AllMessages"
import SearchNavbar from "../../Layout/Navbar/SearchNavbar"
import SearchBar from "../../Layout/Navbar/SearchBar"
import FilterItems from '../../Layout/Navbar/FilterItems'

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
    <section className='px-4 py-5'>
      <SearchNavbar searchBar={<SearchBar />} filter={<FilterItems fieldArr={filterMessages}/>} />
      <AllMessages></AllMessages>
    </section>
  )
}

export default Inbox