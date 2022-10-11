import React from "react";
import Teacher from "../../components/Teacher";
import Button from "../../components/Button";
import Table from "../../components/Table";
import courseData from "../../content/course_data";

function TeacherAssignments() {

  return (
    <Teacher>
      <div className="admin-feed teacher-feed">
        <div>
          <h1>Add Assignments</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"teacher-feed-button"}
              content={"Add New Assignment"}
            />
          </div>
          <Table
            headers={["Course ID", "Course Name", "Teacher", "Duration", "Edit"]}
            contents={courseData}
            addClass={"table-content-teacher"}
          />
        </section>
      </div>
    </Teacher>
  )
}

export default TeacherAssignments;
