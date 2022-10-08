import React from "react";

function Tab(props) {
    const {content, icon} = props

    return (
        <div>
            <img src={icon} alt=""/>
            <h3>{content}</h3>
        </div>
    )
}

export default Tab;
