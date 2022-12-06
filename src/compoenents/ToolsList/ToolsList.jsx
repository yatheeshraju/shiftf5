import React from "react";
import Item from "../Item/Item";
import { toolsData } from "../../mockData/toolsData";

function ToolsList() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-5 gap-2 py-3 px-3">
      {toolsData.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  );
}

export default ToolsList;
