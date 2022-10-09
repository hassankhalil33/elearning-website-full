import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";

function AdminStudents() {

  return (
    <Admin>
      <div className="admin-feed">
        <div>
          <h1>Admin Screen</h1>
        </div>
        <section className="admin-lower-feed">
          <div>
            <Button
              content={"Add New Student"}
            />
          </div>
          <div>

          </div>
        </section>
      </div>
    </Admin>
  )
}

export default AdminStudents;
