import React, { useState } from "react";

import "./Sidebar.css";
import Home from "../Home/Home";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from "./SidebarList/SidebarList";

const Sidebar = (props) => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const expandClickHandler = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="collapse-expand-icon">
          <p onClick={expandClickHandler}>
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}
          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar} />
      </div>

      <div className="container">
        <Home theme={props.theme} changeTheme={props.changeTheme} />
      </div>
    </div>
  );
};

export default Sidebar;
