import React from "react";
import Student from "../../components/Student";
import Button from "../../components/Button";
import Table from "../../components/Table";
import courseData from "../../content/course_data";

function StudentAssignments() {

  return (
    <Student>
      <div className="admin-feed student-feed">
        <div>
          <h1>Add Assignments</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"student-feed-button"}
              content={"Submit Assignment"}
            />
          </div>
          <Table
            headers={["Course ID", "Course Name", "Teacher", "Duration", "Edit"]}
            contents={courseData}
            addClass={"table-content-student"}
          />
        </section>
      </div>
    </Student>
  )
}

export default StudentAssignments;
