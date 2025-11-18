import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

const SortProducts = ({ query, setQuery }) => {
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
    <div>
      <Dropdown label="Sort">
        <DropdownItem onClick={() => applySort("price", "desc")}>
          Price High to Low
        </DropdownItem>
        <DropdownItem onClick={() => applySort("price", "asc")}>
          Price Low to High
        </DropdownItem>
        <DropdownItem onClick={() => applySort("stock", "desc")}>
          Stock High to Low
        </DropdownItem>
        <DropdownItem onClick={() => applySort("stock", "asc")}>
          Stock Low to High
        </DropdownItem>
      </Dropdown>
    </div>
  );
};

export default SortProducts;
