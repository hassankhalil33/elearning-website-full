import React from "react";
import defaultPic from "../assets/images/default_pic.png";

function Table(props) {
  return (
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
  )
}

export default Table;
