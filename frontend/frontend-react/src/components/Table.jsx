import React from "react";
import defaultPic from "../assets/images/default_pic.png";

function Table(props) {
  const { headers, contents } = props;

  return (
    <div>
      <section className="table-content">
        {headers.map((header, index) => {
          return (
            <p key={index}>{header}</p>
          )
        })}
      </section>
      {contents.map((content, index) => {
        return (
          <div key={content.index}>
            <p>{content.id}</p>
            <p><img src={defaultPic} alt="" /></p>
            <p>{content.name}</p>
            <p>{content.course}</p>
            <p></p>
          </div>
        )
      })}
    </div>
  )
}

export default Table;
