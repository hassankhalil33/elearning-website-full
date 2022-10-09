import React, { useState } from "react";

function Tab(props) {
  const { content, icon, url } = props
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {

    setPressed((old) => {
      return !old;
    })
  }

  return (
    <button
      className="tab-button"
      onClick={handleClick}
      style={
        { backgroundColor: pressed ? "#3F72AF" : "" }
      }
    >
      <img src={icon} alt="" />
      <h3>{content}</h3>
    </button>
  )
}

export default Tab;
