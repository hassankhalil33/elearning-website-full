import React from "react";
import Admin from "../../components/Admin";
import Button from "../../components/Button";
import defaultPic from "../../assets/images/default_pic.png";

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
            <section className="table-content">
              <p>ID</p>
              <p>Photo</p>
              <p>Name</p>
              <p>Course</p>
              <p>Edit</p>
            </section>
            <div>
              <p>1</p>
              <p><img src={defaultPic} alt="" /></p>
              <p>Charbel Maroun</p>
              <p>FSWO5</p>
              <p></p>
            </div>
            <div>
              <p>2</p>
              <p><img src={defaultPic} alt="" /></p>
              <p>Jad Yahya</p>
              <p>FSWO5</p>
              <p></p>
            </div>
          </div>
        </section>
      </div>
    </Admin>
  )
}

export default AdminStudents;
