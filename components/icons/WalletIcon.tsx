import React from "react";

export default function WalletIcon({ ...props }) {
  return (
    <svg
      {...props}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M0,102.4c0-28.2,23-51.2,51.2-51.2h384c14.1,0,25.6,11.5,25.6,25.6v25.6H51.2V128h435.2c14.1,0,25.6,11.5,25.6,25.6v256
		c0,28.3-22.9,51.2-51.2,51.2H51.2C22.9,460.8,0,437.9,0,409.6V102.4z M422.4,332.8c21.2,0,38.4-17.2,38.4-38.4S443.6,256,422.4,256
		S384,273.2,384,294.4S401.2,332.8,422.4,332.8z"
        />
      </g>
    </svg>
  );
}
