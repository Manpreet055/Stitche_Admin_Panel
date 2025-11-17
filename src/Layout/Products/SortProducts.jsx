import React, { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

const SortProducts = ({ sortingState }) => {
  const [sortConfig, setSortConfig] = useState({
    order: "asc",
    field: "name",
  });

  useEffect(() => {
    if (typeof sortingState === "function") sortingState(sortConfig);
  }, [sortConfig,sortingState]);

  return (
    <div>                                         
      <Dropdown label="Sort">
        <DropdownItem
          onClick={() => setSortConfig({ order: "desc", field: "price" })}
        >
          Price High to Low
        </DropdownItem>
        <DropdownItem
          onClick={() => setSortConfig({ order: "asc", field: "price" })}
        >
          Price Low to High
        </DropdownItem>
        <DropdownItem
          onClick={() => setSortConfig({ order: "desc", field: "stock" })}
        >
          Stock High to Low
        </DropdownItem>
        <DropdownItem
          onClick={() => setSortConfig({ order: "asc", field: "stock" })}
        >
          Stock Low to High
        </DropdownItem>
      </Dropdown>
    </div>
  );
};

export default SortProducts;
