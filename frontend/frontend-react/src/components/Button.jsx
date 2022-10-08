import React, { useState } from "react";

function Button(props) {
    const {content} = props; 

    return (
        <button>{content}</button>
    )
}

export default Button;
