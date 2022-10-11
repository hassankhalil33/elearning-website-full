import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import Table from "../../components/Table";
import studentData from "../../content/student_data";
import FetchData from "../../hooks/FetchData";

function AdminStudents() {
  const { data } = FetchData("/students");
  // const studentData = data.message;
  console.log(data.message)

  return (
    <Admin>
      <div className="admin-feed">
        <div>
          <h1>All Students</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              className={"admin-feed-button"}
              content={"Add New Student"}
            />
          </div>
          <Table
            headers={["ID", "Photo", "Name", "Course", "Edit"]}
            contents={studentData && studentData}
          />
        </section>
      </div>
    </Admin>
  )
}

export default AdminStudents;
