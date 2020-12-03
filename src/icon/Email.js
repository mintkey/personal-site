import React from "react";

const SVG = ({
    style = {},
    fill = "#000",
    width = "100%",
    className = "",
    viewBox = "0 0 24 18"
}) => (
    <svg
        width={width}
        style={style}
        height={width}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g fill={fill}>
            <polygon class="st0" points="24,2.6 24,15.1 17.4,7.9 		"/>
            <polygon class="st0" points="24,0 12,9.7 0,0 		"/>
            <polygon class="st0" points="15.9,9.1 24,18 0,18 8.1,9.1 12,12.3 		"/>
            <polygon class="st0" points="6.6,7.9 0,15.1 0,2.6 		"/>
        </g>
    </svg>
);

export default SVG;
