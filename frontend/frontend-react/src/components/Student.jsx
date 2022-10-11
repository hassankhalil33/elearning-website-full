import React from "react";
import Profile from "./Profile";
import SideBar from "./SideBar";
import studentTabs from "../content/student_tabs";

function Student(props) {
  const { children } = props;

  return (
    <section className="admin-section student-section">
      <SideBar
        tabs={studentTabs}
        addClass={"student-sidebar"}
        buttonClass={"logout-button-student"}
        color={"#f7c3c3"}
      />

      {children}

      <div className="admin-profile student-profile">
        <h1>Profile</h1>
        <Profile
          fullName={"Charbel Maroun"}
          type={"student"}
        />
      </div>
    </section >
  )
}

export default Student;
