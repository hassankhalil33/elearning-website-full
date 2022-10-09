import React from "react";
import defaultPic from "../assets/images/default_pic.png";

function Table(props) {
  const { headers, content } = props;

  return (
    <div>
      <section className="table-content">
        {headers.map((header, index) => {
          return (
            <p key={index}>{header}</p>
          )
        })}
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
