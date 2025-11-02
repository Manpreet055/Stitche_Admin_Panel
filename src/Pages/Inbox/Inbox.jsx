import React from "react";
import AllMessages from "../../Layout/Inbox/AllMessages";
import SearchNavbar from "../../Layout/Navbar/SearchNavbar";
import SearchBar from "../../Layout/Navbar/SearchBar";
import FilterItems from "../../Layout/Navbar/FilterItems";

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
    <section className="overlflow-scroll h-screen p-4 w-full scrollbar-hidden">
      <SearchNavbar
        searchBar={<SearchBar />}
        filter={<FilterItems fieldArr={filterMessages} />}
      />
      <div className="overflow-auto scrollbar-hidden  h-full w-full mb-56  ">
        <AllMessages />
      </div>
    </section>
  );
};

export default Inbox;
