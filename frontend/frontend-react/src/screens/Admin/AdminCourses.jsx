import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import Table from "../../components/Table";

function AdminCourses() {

  return (
    <Admin>
      <div className="admin-feed">
        <div>
          <h1>All Courses</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"admin-feed-button"}
              content={"Add New Teacher"}
            />
          </div>
          <Table
            headers={["Course ID", "Name", "Teacher", "Duration", "Edit"]}
            contents={""}
          />
        </section>
      </div>
    </Admin>
  )
}

export default AdminCourses;
