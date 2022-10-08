import React from "react";

function Tab(props) {
    const {content, icon} = props

    return (
        <button className="tab-button">
            <img src={icon} alt=""/>
            <h3>{content}</h3>
        </button>
    )
}

export default Tab;
