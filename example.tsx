import React from "react";

import Select, { components, MenuListProps } from "react-select";
import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions
} from "./docs/data";

const handleScroll = () => {
  console.log("scrolling");
};

const MenuList = (
  props: MenuListProps<ColourOption | FlavourOption, false, GroupedOption>
) => {
  return (
    <components.MenuList {...props}>
      <div onScroll={handleScroll}>{props.children}</div>
    </components.MenuList>
  );
};

export default () => (
  <Select<ColourOption | FlavourOption, false, GroupedOption>
    defaultValue={colourOptions[1]}
    menuIsOpen={true}
    options={groupedOptions}
    components={{ MenuList }}
  />
);
