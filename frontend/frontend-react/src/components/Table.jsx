import React from "react";
import defaultPic from "../assets/images/default_pic.png";

function Table(props) {
  const { headers, contents, addClass } = props;

  return (
    <div>
      <section className={`table-content ${addClass && addClass}`}>
        {headers.map((header, index) => {
          return (
            <p key={index}>{header}</p>
          )
        })}
      </section>
      {contents.map((content, index) => {
        return (
          <div key={index}>
            <p>{index + 1}</p>
            {content.image && <p><img className="profile-image" src={defaultPic} alt="default" /></p>}
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
