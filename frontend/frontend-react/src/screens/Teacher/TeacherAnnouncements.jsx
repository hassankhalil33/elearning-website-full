import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import Table from "../../components/Table";
import courseData from "../../content/course_data";

function TeacherAnnouncements() {

  return (
    <Admin>
      <div className="admin-feed teacher-feed">
        <div>
          <h1>Create Announcements</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"admin-feed-button"}
              content={"Add New Course"}
            />
          </div>
          <Table
            headers={["Course ID", "Course Name", "Teacher", "Duration", "Edit"]}
            contents={courseData}
          />
        </section>
      </div>
    </Admin>
  )
}

export default TeacherAnnouncements;
