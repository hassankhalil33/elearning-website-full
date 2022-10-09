import React from "react";
import defaultPic from "../assets/images/default_pic.png";

function Table(props) {
  const { headers, contents } = props;
  const [image] = contents;

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
            {image && <p><img src={defaultPic} alt="" /></p>}
            <p>{content.name}</p>
            {content.course && <p>{content.course}</p>}
            {content.teacher && <p>{content.teacher}</p>}
            {content.duration && <p>{content.duration}</p>}
            <p></p>
          </div>
        )
      })}
    </div>
  )
}

export default Table;
