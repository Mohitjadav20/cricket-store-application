import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const FilterDropdown = ({ handleSortChange }) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Sort by</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Sort options">
        <DropdownItem key="Name" onClick={() => handleSortChange("name")}>
          Name
        </DropdownItem>
        <DropdownItem key="price" onClick={() => handleSortChange("price")}>
          Price (High to Low)
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default FilterDropdown;
