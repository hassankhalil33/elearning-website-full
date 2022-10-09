import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";

function AdminStudents() {

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
          <div>
            <div>
              <p>ID</p>
              <p>Photo</p>
              <p>Name</p>
              <p>Course</p>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  )
}

export default AdminStudents;
