import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import Table from "../../components/Table";
import teacherData from "../../content/teacher_data";

function AdminTeachers() {

  return (
    <Admin>
      <div className="admin-feed">
        <div>
          <h1>All Teachers</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"admin-feed-button"}
              content={"Add New Teacher"}
            />
          </div>
          <Table
            headers={["ID", "Photo", "Name", "Teaching", "Edit"]}
            contents={teacherData}
          />
        </section>
      </div>
    </Admin>
  )
}

export default AdminTeachers;
