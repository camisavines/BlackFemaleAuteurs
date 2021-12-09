import React from "react";

const Tooltip = ({label, text}) => {
    return (
        <span 
            className="my-tooltip" 
            data-bs-toggle="tooltip" 
            data-bs-placement="right" 
            data-html="true" 
            title={`${text}`}
        >
            {label}
        </span>
    )
}

export default Tooltip;