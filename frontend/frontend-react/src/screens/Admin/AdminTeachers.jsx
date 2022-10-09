import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import Table from "../../components/Table";


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
              content={"Add New Student"}
            />
          </div>
          <Table
            headers={["ID", "Photo", "Name", "Edit"]}
            contents={studentData}
          />
        </section>
      </div>
    </Admin>
  )
}

export default AdminTeachers;
