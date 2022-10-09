import React from "react";
import Tab from "../components/Tab";
import logout from "../assets/images/logout.svg";
import { useLocation } from "react-router-dom";

function SideBar(props) {
  const currentLocation = useLocation();

  return (
    <div className="admin-sidebar">
      <h1>E-Tuter</h1>
      {props.tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            content={tab.content}
            icon={tab.icon}
            url={tab.path}
            active={currentLocation.pathname === tab.path}
          />
        )
      })}
      <Tab
        addClass="logout-button"
        content={"Log Out"}
        icon={logout}
        url={"/"}
      />
    </div>
  )
}

export default SideBar;
