import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebar_row  ${selected && "selected"}`}>
      <Icon className="sidebarrow_icons" />
      <h1 className="sidebarrow_title">{title}</h1>
    </div>
  );
}

export default SidebarRow;
