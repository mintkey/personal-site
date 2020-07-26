import React from "react";

const SVG = ({
    style = {},
    fill = "#3b3b3b",
    width = "100%",
    className = "",
    viewBox = "0 0 24 23"
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
            <path
                class="st0"
                d="M19,14.6c0-5.1-6-4.7-6,0V23H8V7h5v2.2c2.1-3.9,11-4.2,11,3.7V23h-5V14.6z"/>
            <rect y="7" class="st0" width="5" height="16"/>
            <ellipse class="st0" cx="2.5" cy="2.5" rx="2.5" ry="2.5"/>
        </g>
    </svg>
);

export default SVG;
