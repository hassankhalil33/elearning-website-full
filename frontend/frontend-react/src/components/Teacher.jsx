import React from "react";
import Profile from "./Profile";
import SideBar from "./SideBar";
import teacherTabs from "../content/teacher_tabs";

function Admin(props) {
  const { children } = props;

  return (
    <section className="admin-section teacher-section">
      <SideBar tabs={teacherTabs} />

      {children}

      <div className="admin-profile teacher-profile">
        <h1>Profile</h1>
        <Profile
          fullName={"Charbel Daoud"}
          type={"teacher"}
        />
      </div>
    </section >
  )
}

export default Admin;
