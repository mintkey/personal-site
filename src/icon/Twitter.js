import React from "react";

const SVG = ({
  style = {},
  fill = "#3b3b3b",
  width = "100%",
  className = "",
  viewBox = "0 0 24.1 19.5"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M24.1,2.3c-0.7,1-1.5,1.8-2.5,2.6c0.3,6.9-4.9,14.6-14,14.6c-2.8,0-5.4-0.8-7.6-2.2c2.6,0.3,5.2-0.4,7.3-2
			c-2.2,0-4-1.5-4.6-3.4C3.5,12,4.2,12,4.9,11.8c-2.4-0.5-4-2.6-3.9-4.9c0.7,0.4,1.4,0.6,2.2,0.6C1.1,6,0.5,3.1,1.8,0.9
			c2.4,3,6.1,4.9,10.1,5.1c-0.7-3.1,1.6-6,4.8-6c1.4,0,2.7,0.6,3.6,1.5c1.1-0.2,2.2-0.6,3.1-1.2C23,1.5,22.3,2.4,21.2,3
			C22.3,2.9,23.2,2.6,24.1,2.3z"
    />
  </svg>
);

export default SVG;
