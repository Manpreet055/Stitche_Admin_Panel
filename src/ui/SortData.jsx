import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";
const SortOrders = ({ query, setQuery, sortOptions }) => {
  const applySort = (field, order) => {
    setQuery({
      ...query,
      sort: {
        sortField: field,
        sortingOrder: order,
      },
      page: 1,
    });
  };
  return (
    <div className="p-4 justify-evenly items-center flex border">
      <Dropdown label="Sort">
        {sortOptions.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => applySort(option.field, option.order)}
          >
            {option.title}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
};

export default SortOrders;
